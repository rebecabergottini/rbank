from flask_sqlalchemy import SQLAlchemy
from argon2 import PasswordHasher
import argon2
import random
import string

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
        

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    account_number = db.Column(db.String(20), unique=True, nullable=False)
    iban = db.Column(db.String(34), unique=True, nullable=False)

    def __repr__(self):
        return f'<Account {self.account_number}>'

    def generate_account_number(self):
        # Generate a random account number
        account_number = ''.join(random.choices(string.digits, k=10))
        self.account_number = account_number

    def generate_iban(self):
        # Country code and control digit for Spain (ES)
        country_code = 'ES'
        control_digit = '00'  # Control digit initially set to zeros

        # Combine country code, control digit, and account number
        account_data = control_digit + self.account_number

        # Calculate control digit using the specific algorithm for Spain
        control_digit = str(98 - (int(account_data) % 97)).zfill(2)

        # Combine country code, control digit, and account number to form the IBAN
        self.iban = country_code + control_digit + account_data

    def transfer_money(self, destination_account, amount):
        if self.balance >= amount:
            self.balance -= amount
            destination_account.balance += amount
            db.session.commit()
            return True
        else:
            return False