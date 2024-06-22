import requests
from baseurl import BASE_URL

def opcion_bloquear(correo, clave):
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
    response = requests.post(f"{BASE_URL}/bloquear", json={
        "correo": correo,
        "clave": clave,
        "correo_bloquear": correo_bloquear
    })
    print(response.json())


def desbloquear_usuario(correo, clave, correo_desbloquear):
    response = requests.delete(f"{BASE_URL}/desbloquear", json={
        "correo": correo,
        "clave": clave,
        "correo_desbloquear": correo_desbloquear
    })
    print(response.json())
