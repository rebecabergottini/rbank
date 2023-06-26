from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from datetime import timedelta
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)
CORS(api)


@api.route('/signup', methods=['POST'])
def create_user():
    full_name = request.json.get('full_name')
    address = request.json.get('address')
    dni = request.json.get('dni')
    email = request.json.get('email')
    password = request.json.get('password')

    # Verificar si el usuario ya existe en la base de datos
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'El usuario ya está registrado'}), 400

    # Crear una nueva instancia del modelo User
    new_user = User(full_name=full_name, address=address, dni=dni, email=email, password=password)
    new_user.set_password(password)
    # Guardar el nuevo usuario en la base de datos
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuario registrado exitosamente'}), 201


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
