import requests	
from baseurl import BASE_URL

def registar_usuario():
    nombre = input("Ingrese su nombre: ")
    correo = input("Ingrese su correo: ")
    clave = input("Ingrese su clave: ")
    descripcion = input("Ingrese su descripcion: ")
    data = {
        "nombre": nombre,
        "correo": correo,
        "clave": clave,
        "descripcion": descripcion

    }
    response = requests.post(f"{BASE_URL}/api/registrar", json=data)
    print(response.json())
    return response.json()