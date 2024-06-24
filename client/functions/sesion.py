import requests	

BASE_URL = "http://localhost:3000/api" #URL de la API
def iniciar_sesion():
    cont = 0
    while cont < 3:  # Permitir hasta 3 intentos
        correo = input("Ingrese su correo: ")
        clave = input("Ingrese su clave: ")

        data = {
            "correo": correo,
            "clave": clave
        }
        try:
            response = requests.post(f"{BASE_URL}/iniciar_sesion", json=data)

            if response.status_code == 200:
                print("Inicio de sesión exitoso")
                return (correo, clave)
            else:
                print("Error al iniciar sesión")
                print(f"Reintente nuevamente, le quedan {2 - cont} intentos")
                cont += 1
        except requests.exceptions.RequestException as e:
            print(f"Error de conexión: {e}")
            print(f"Reintente nuevamente, le quedan {2 - cont} intentos")
            cont += 1

    print("Ha excedido el número de intentos")