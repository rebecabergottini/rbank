from flask import Flask, request, jsonify, Blueprint, json
from api.models import db, User
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

    # Generar un hash de la contraseña
    password_hash = generate_password_hash(password)

    # Crear una nueva instancia del modelo User
    new_user = User(full_name=full_name, dni=dni, email=email, password_hash=password_hash)
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

    user = User.query.filter_by(email=email, password=password).first()
    
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 404
    
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401
    
# Access private route
@api.route('/profile', methods=['GET'])    
@jwt_required()
def access_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify({"msg": "acceso permitido"}), 200
