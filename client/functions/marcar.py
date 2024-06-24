import requests

BASE_URL = "http://localhost:3000/api" #URL de la API

def opciones_marcar(correo, clave):
    print("1. Marcar correo como favorito")
    print("2. Desmarcar correo como favorito")
    opcion = int(input("Ingrese una opcion: "))
    while True:
        if opcion == 1:
            correo_marcar = int(input("Ingrese el correo a marcar como favorito: "))
            marcar_favorito(correo, clave, correo_marcar)
            break
        elif opcion == 2:
            correo_marcar = (input("Ingrese el correo a desmarcar como favorito: "))
            desmarcar_favorito(correo, clave, correo_marcar)
            break
        else:
            print("Opcion invalida")
    

def marcar_favorito(correo, clave, id_correo_favorito):
    data = {
        "usuarioId": correo,
        "clave": clave,
        "correoId": id_correo_favorito
    }
    try:
        response = requests.post(f"{BASE_URL}/marcarcorreo", json=data)
        response.raise_for_status()
        print("Correo marcado como favorito exitosamente.")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Correo no encontrado")
        print(f"Error al marcar correo como favorito: {err}")



def desmarcar_favorito(correo, clave, id_correo_favorito):
    data = {
        "usuarioId": correo,
        "clave": clave,
        "correoId": id_correo_favorito
    }
    try:
        response = requests.delete(f"{BASE_URL}/desmarcarcorreo", json=data)
        response.raise_for_status()
        print("Correo desmarcado como favorito exitosamente.")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Correo no encontrado")
        print(f"Error al desmarcar correo como favorito: {err}")
