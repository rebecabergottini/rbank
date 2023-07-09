from flask import Flask, request, jsonify, Blueprint, json
from api.models import db, User, Account
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


@api.route('/transfer', methods=['POST'])
@jwt_required()
def transfer_money():
    current_user_id = get_jwt_identity()
    data = request.json
    source_account_id = data['source_account_id']
    destination_account_id = data['destination_account_id']
    amount = data['amount']

    source_account = Account.query.get(source_account_id)
    destination_account = Account.query.get(destination_account_id)

    if source_account is None or destination_account is None:
        return jsonify({"message": "Invalid account ID"}), 404

    if source_account.user_id != current_user_id:
        return jsonify({"message": "Unauthorized"}), 401

    success = source_account.transfer_money(destination_account, amount)

    if success:
        return jsonify({"message": "Transfer successful"}), 200
    else:
        return jsonify({"message": "Insufficient balance"}), 400

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