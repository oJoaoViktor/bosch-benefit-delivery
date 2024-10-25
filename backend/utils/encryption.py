#Esse script servirá para gerar, carregar chave, encriptar e desencriptar sua senha para conexão com o banco

import os
from cryptography.fernet import Fernet

def generate_key():
    # Gera uma nova chave Fernet e a salva em um arquivo.
    key = Fernet.generate_key()
    with open("fernet_key.key", "wb") as key_file:
        key_file.write(key)
    return key.decode()

def load_key():
    # Carrega a chave de criptografia do arquivo .key
    return open("utils/fernet_key.key", "rb").read()  # Lê a chave em bytes

def encrypt_password(password):
    # Criptografa a senha e retorna a senha criptografada
    cipher_suite = Fernet(load_key())
    encrypted_password = cipher_suite.encrypt(password.encode())
    return encrypted_password.decode()  # Retorna como string

def decrypt_password(encrypted_password):
    # Descriptografa a senha usando a chave fornecida
    cipher_suite = Fernet(load_key())
    return cipher_suite.decrypt(encrypted_password.encode()).decode()  # Retorna a senha original
