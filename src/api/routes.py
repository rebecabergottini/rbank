from flask import Flask, request, jsonify, Blueprint, json
from api.models import db, User, Account, Transaction
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from datetime import timedelta
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import random
import string

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

    return jsonify({'message': 'User successfully registered', 'token': token}), 201

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

    return jsonify({"token": token}), 200

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

from api.models import User

@api.route('/transactions', methods=['POST'])
@jwt_required()
def create_transaction():
    current_user_email = get_jwt_identity()
    data = request.json
    receiver_iban = data['receiver_iban']
    amount = data['amount']

    sender = User.query.filter_by(email=current_user_email).first()
    receiver = User.query.filter_by(iban=receiver_iban).first()

    if receiver is None:
        return jsonify({"message": "Invalid receiver IBAN"}), 404

    if sender.email == receiver.email:
        return jsonify({"message": "Cannot transfer to own account"}), 400

    if amount <= 0:
        return jsonify({"message": "Invalid amount"}), 400

    if sender.balance is None:
        sender.balance = 0.0

    if sender.balance < amount:
        return jsonify({"message": "Insufficient balance"}), 400

    # Realizar la transferencia
    sender.balance -= amount
    receiver.balance += amount

    # Crear una nueva instancia de Transaction
    transaction = Transaction(sender_id=sender.id, receiver_iban=receiver_iban, amount=amount)

    # Guardar la transacción en la base de datos
    db.session.add(transaction)
    db.session.commit()

    return jsonify({"message": "Transaction created successfully"}), 201



@api.route('/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    serialized_transactions = [transaction.serialize() for transaction in transactions]
    return jsonify(serialized_transactions), 200
