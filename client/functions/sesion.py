import requests	

BASE_URL = "http://localhost:3000/" #URL de la API

def iniciar_sesion(correo, clave):
    cont = 0
    while cont < 2:
        correo = input("Ingrese su correo: ")
        clave = input("Ingrese su clave: ")

        data = {
            "correo": correo,
            "clave": clave
        }
        response = requests.post(f"{BASE_URL}/iniciar_sesion", json=data)

        if response.status_code == 200:
            print("Inicio de sesion exitoso")
            return (correo, clave)
        else: 
            print("Error al iniciar sesion")
            print(f"Reintente nuevamente, le quedan {3 - cont} intentos")
            cont += 1

    print(response.json())

