from flask import Flask, request, jsonify, Blueprint, json
from api.models import db, User, Account
from api.models import Transfer
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from datetime import timedelta
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import jwt

api = Blueprint('api', __name__)
CORS(api)


@api.route('/signup', methods=['POST'])
def create_user():
    full_name = request.json.get('full_name')
    dni = request.json.get('dni')
    email = request.json.get('email')
    password = request.json.get('password')

    # Verificar si el usuario ya existe en la base de datos
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'User is already registered'}), 400

    # Genera un número de cuenta y IBAN aleatorio
    iban = Account.generate_iban()

    # Generar un hash de la contraseña
    password_hash = generate_password_hash(password)

    # Crear una nueva instancia del modelo User
    new_user = User(full_name=full_name, dni=dni, email=email, password_hash=password_hash, iban=iban)
    new_user.balance = 500
    # Guardar el nuevo usuario en la base de datos
    db.session.add(new_user)
    db.session.commit()

    # Generar un token de autenticación
    token = jwt.encode({'email': email}, 'secret_key', algorithm='HS256')

    return jsonify({'message': 'User successfully registered', 'token': token, "user":new_user.serialize()}), 201

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "Bad username or password"}), 404

    # Regenerar la contraseña para asegurarse de que esté en el formato correcto
    user.set_password(password)

    if not user.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    # Generar el token de acceso con el correo electrónico como identidad
    token = create_access_token(identity=user.email)

    return jsonify({"token": token,"user":user.serialize()}), 200

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = []
    for user in users:
        user_data = user.serialize()
        accounts = Account.query.filter_by(user_id=user.id).all()
        account_numbers = [account.account_number for account in accounts]
        user_data['accounts'] = account_numbers
        result.append(user_data)
    return jsonify(result), 200

@api.route('/profile', methods=['GET'])
@jwt_required()
def user_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify(user.serialize()), 200

@api.route('/transfers', methods=['POST'])
@jwt_required()
def create_transfer():
    # Obtener el correo electrónico del usuario actual desde el token JWT
    current_user_email = get_jwt_identity()
    
    # Obtener los datos de la transferencia del cuerpo de la solicitud
    data = request.json
    receiver_iban = data['receiver_iban']
    amount = data['amount']
    
    # Buscar al remitente y destinatario en la base de datos
    sender = User.query.filter_by(email=current_user_email).first()
    receiver = User.query.filter_by(iban=receiver_iban).first()
    print("sender",sender)
    print("receiver",receiver)
    # Verificar si el destinatario es válido
    if receiver is None:
        return jsonify({"message": "IBAN de destinatario inválido"}), 404

    # Verificar si el remitente y el destinatario son la misma cuenta
    if sender.email == receiver.email:
        return jsonify({"message": "No se puede transferir a la propia cuenta"}), 400

    # Verificar si el monto de la transferencia es válido
    if int(amount) <= 0:
        return jsonify({"message": "Monto inválido"}), 400

    # Verificar si el remitente tiene suficiente saldo
    if sender.balance is None:
        sender.balance = 0.0

    if sender.balance < int(amount):
        return jsonify({"message": "Saldo insuficiente"}), 400

    # Realizar la transferencia
    sender.balance -= int(amount)
    receiver.balance += int(amount)

    # Crear una nueva instancia de Transfer (Transferencia)
    transfer = Transfer(sender_id=sender.id, receiver_id=receiver.id, receiver_iban=receiver_iban, amount=int(amount))

    # Guardar la transferencia en la base de datos
    db.session.add(transfer)
    db.session.commit()

    return jsonify({"message": "Transferencia creada exitosamente"}), 201


@api.route('/transfers', methods=['GET'])
@jwt_required()
def get_transfers():
    # Obtener el correo electrónico del usuario actual desde el token JWT
    current_user_email = get_jwt_identity()
    
    # Buscar al usuario en la base de datos
    user = User.query.filter_by(email=current_user_email).first()

    # Obtener las transferencias enviadas y recibidas por el usuario
    sent_transfers = Transfer.query.filter_by(sender_id=user.id).all()
    received_transfers = Transfer.query.filter_by(receiver_iban=user.iban).all()

    # Serializar las transferencias en formato JSON
    sent_transfers_serialized = [transfer.serialize() for transfer in sent_transfers]
    received_transfers_serialized = [transfer.serialize() for transfer in received_transfers]

    # Devolver las transferencias enviadas y recibidas como respuesta
    return jsonify({
        "sent_transfers": sent_transfers_serialized,
        "received_transfers": received_transfers_serialized
    }), 200
