from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from argon2 import PasswordHasher

ph = PasswordHasher()
db = SQLAlchemy()

class User(db.Model):
    # Define the User model with necessary columns
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), nullable=False)
    dni = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False, name="user_email")
    password_hash = db.Column(db.String(255), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # Serialize the User object to a dictionary
        return {
            "id": self.id,
            "full_name": self.full_name,
            "dni": self.dni,
            "email": self.email,

            # Do not serialize the password, it's a security breach
        }

    
    def set_password(self, password):
        # Generate a password hash and set it as the password_hash attribute
        self.password_hash = ph.hash(password)

        
    def check_password(self, password):
        # Check if the provided password matches the stored password hash
        try:
            return ph.verify(self.password_hash, password)
        except argon2.exceptions.VerifyMismatchError:
            return False