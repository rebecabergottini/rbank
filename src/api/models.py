from flask_sqlalchemy import SQLAlchemy
from argon2 import PasswordHasher
import argon2
from faker import Faker
import random
import string

fake = Faker()
ph = PasswordHasher()
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), nullable=False)
    dni = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False, name="user_email")
    password_hash = db.Column(db.String(255), unique=False, nullable=False)
    iban = db.Column(db.String(34), unique=True, nullable=False)
    accounts = db.relationship('Account', backref='user', lazy=True)
    balance = db.Column(db.Float, default=0.0)  # Agregar el atributo balance

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "dni": self.dni,
            "email": self.email,
            "iban": self.iban,
            "accounts": self.accounts,
            "balance": self.balance
        }

    def set_password(self, password):
        self.password_hash = ph.hash(password)

    def check_password(self, password):
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
    
    @staticmethod
    def generate_iban():
        account_number = ''.join(random.choices(string.digits, k=10))
        country_code = 'ES'
        control_digit = '00'
        account_data = control_digit + account_number
        control_digit = str(98 - (int(account_data) % 97)).zfill(2)
        iban = country_code + control_digit + account_data
        return iban
    

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    receiver_iban = db.Column(db.String(34), nullable=False)
    amount = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Transaction {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "sender_id": self.sender_id,
            "receiver_iban": self.receiver_iban,
            "amount": self.amount
        }