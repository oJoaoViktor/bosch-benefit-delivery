#Este script ativa o generate_key para gerar uma chave fernet

from encryption import generate_key

if __name__ == "__main__":
    key = generate_key()
    print("Chave gerada e salva em fernet_key.key:", key)
