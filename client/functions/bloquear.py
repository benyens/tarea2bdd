import requests

BASE_URL = "http://localhost:3000/" #URL de la API

def opciones_bloquear(correo, clave):
    print("1. Bloquear usuario")
    print("2. Desbloquear usuario")
    opcion = int(input("Ingrese una opcion: "))
    while True:
        if opcion == 1:
            correo_bloquear = input("Ingrese el correo del usuario a bloquear: ")
            bloquear_usuario(correo, clave, correo_bloquear)
            break
        elif opcion == 2:
            correo_desbloquear = input("Ingrese el correo del usuario a desbloquear: ")
            desbloquear_usuario(correo, clave, correo_desbloquear)
            break
        else:
            print("Opcion invalida")

def bloquear_usuario(correo, clave, correo_bloquear):
    data = {
        "correo": correo,
        "clave": clave,
        "direccion_bloqueada": correo_bloquear
    }
    response = requests.post(f"{BASE_URL}/bloquear", json=data)
    print(response.json())


def desbloquear_usuario(correo, clave, correo_desbloquear):
    data = {
        "correo": correo,
        "clave": clave,
        "direccion_bloqueada": correo_desbloquear
    }
    response = requests.delete(f"{BASE_URL}/desbloquear", json=data)

    print(response.json())
