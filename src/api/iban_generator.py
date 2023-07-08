from stdnum import iban

def generate_iban(country_code, bank_code, account_number):
    # Combina el código del país, el código del banco y el número de cuenta
    account_data = bank_code + account_number

    # Calcula los dígitos de control del IBAN
    control_digits = str(98 - (int(account_data + country_code + '00') % 97)).zfill(2)

    # Combina el país, los dígitos de control, el código del banco y el número de cuenta para formar el IBAN completo
    iban_number = country_code + control_digits + account_data

    # Valida el número IBAN generado
    if not iban.is_valid(iban_number):
        raise ValueError("Invalid IBAN number")

    return iban_number

# Ejemplo de uso
country_code = 'ES'
bank_code = '1234'
account_number = '5678901234567890'

try:
    iban_number = generate_iban(country_code, bank_code, account_number)
    print("IBAN number:", iban_number)
except ValueError as e:
    print("Error:", str(e))
