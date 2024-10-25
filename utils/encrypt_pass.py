#Utilize esse arquivo para encriptar sua senha para o .env

from encryption import encrypt_password

# Defina a senha do banco de dados aqui
db_password = "sua_senha"

# Criptografa a senha
encrypted_password = encrypt_password(db_password)

print("Senha criptografada:", encrypted_password)

# Salve a senha criptografada em um arquivo ou variável de ambiente
with open(".env", "a") as f:
    f.write(f"ENCRYPTED_DB_PASSWORD={encrypted_password}\n")
