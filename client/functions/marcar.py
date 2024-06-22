import requests
from baseurl import BASE_URL

def opciones_marcar(correo, clave):
    print("1. Marcar usuario como favorito")
    print("2. Desmarcar usuario como favorito")
    opcion = int(input("Ingrese una opcion: "))
    while True:
        if opcion == 1:
            correo_bloquear = input("Ingrese el correo del usuario a marcar como favorito: ")
            marcar_favorito(correo, clave, correo_bloquear)
            break
        elif opcion == 2:
            correo_desbloquear = input("Ingrese el correo del usuario a desmarcar como favorito: ")
            desmarcar_favorito(correo, clave, correo_desbloquear)
            break
        else:
            print("Opcion invalida")
    

def marcar_favorito(correo, clave, id_correo_favorito):
    data = {
        "correo": correo,
        "clave": clave,
        "direccion_favorita": id_correo_favorito
    }
    response = requests.post(f"{BASE_URL}/marcarcorreo", json=data)
    print(response.json())


def desmarcar_favorito(correo, clave, id_correo_favorito):
    data = {
        "UsuarioId": correo,
        "clave": clave,
        "direccion_favorita": id_correo_favorito
    }
    response = requests.delete(f"{BASE_URL}/desmarcarcorreo", json=data)
    print(response.json())