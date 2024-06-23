import requests	


BASE_URL = "http://localhost:3000/api" #URL de la API

def registrar_usuario():
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
    try:
        response = requests.post(f"{BASE_URL}/registrar", json=data)
        response.raise_for_status()  # Esto lanzará una excepción si hay un error HTTP
        print(response.json())
        if response.status_code == 200:
            return correo, clave
    except requests.exceptions.RequestException as e:
        print(f"Error de conexión: {e}")
        # Aquí puedes decidir cómo manejar el error, por ejemplo, intentar nuevamente
        registrar_usuario()

registrar_usuario()