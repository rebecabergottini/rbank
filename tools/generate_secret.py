import os
import uuid
import secrets

# Generate secret key

# Form 1
secret1 = os.urandom(12)

# Form 2 
secret2 = uuid.uuid4().hex

# Form 3
secret3 = secrets.token_urlsafe(12)

def main():
    print(secret1)
    print(secret2)
    print(secret3)

if __name__ == '__main__':
    main()