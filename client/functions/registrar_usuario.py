import requests

BASE_URL = "http://localhost:3000/api"  # URL de la API

def registrar():
    nombre = input("Ingrese su nombre: ")
    correo = input("Ingrese su correo: ")
    clave = input("Ingrese su clave: ")
    descripcion = input("Ingrese su descripción: ")
    
    data = {
        "nombre": nombre,
        "correo": correo,
        "clave": clave,
        "descripcion": descripcion
    }

    try:
        response = requests.post(f"{BASE_URL}/registrar", json=data)
        response.raise_for_status()  # Esto lanzará una excepción si hay un error HTTP

        if response.status_code == 200:
            print("Se ha registrado correctamente")
            return correo, clave  # Retornar el correo y la clave registrados

    except requests.exceptions.RequestException as e:
        if response.status_code == 500:
            print("El correo ya está registrado, intente con otro correo")
        else:
            print(f"Error de conexión: {e}")

    opcion = input("¿Desea intentar nuevamente? (s/n): ").lower()
    if opcion == 's':
        return registrar()  # Llamar recursivamente a registrar()
    else:
        print("Registro cancelado.")
        return None