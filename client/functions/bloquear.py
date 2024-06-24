import requests

BASE_URL = "http://localhost:3000/api" #URL de la API

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
        "usuarioId": correo,
        "clave": clave,
        "direccion_bloqueada": correo_bloquear
    }
    try:
        response = requests.post(f"{BASE_URL}/bloquearusuario", json=data)
        response.raise_for_status()
        print("Dirección bloqueada exitosamente.")
        print(f"{correo_bloquear} ha sido bloqueado.")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Usuario no encontrado")
        print(f"Error al bloquear usuario: {err}")


def desbloquear_usuario(correo, clave, correo_desbloquear):
    data = {
        "usuarioId": correo,
        "clave": clave,
        "direccion_bloqueada": correo_desbloquear
    }
    try:
        response = requests.delete(f"{BASE_URL}/desbloquearusuario", json=data)
        response.raise_for_status()
        print("Dirección desbloqueada exitosamente.")
        print(f"{correo_desbloquear} ha sido desbloqueado.")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Usuario no encontrado")
        print(f"Error al desbloquear usuario: {err}")

