import requests

BASE_URL = "http://localhost:3000/api" #URL de la API


def ver_informacion(correo):
    correo_ver = input("Ingrese el correo del usuario a ver la información: ")
    try:
        response = requests.get(f"{BASE_URL}/informacion/{correo_ver}")
        response.raise_for_status()
        informacion_usuario = response.json()
        print("Información del usuario:")
        print(f"Nombre: {informacion_usuario["nombre"]} ")
        print(f"Descripción: {informacion_usuario["descripcion"]} ")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Usuario no encontrado")
        else:
            print(f"Error al obtener información del usuario: {err}")
            
def ver_favoritos(correo):
    try:
        response = requests.get(f"{BASE_URL}/api/favoritos/{correo}")

        if response.status_code == 200:
            correos_favoritos = response.json()
            return correos_favoritos
        else:
            if response.status_code == 404:
                print("No se encontraron correos favoritos")
            else:
                print(f"Error en la solicitud: {response.status_code} - {response.text}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error en la solicitud: {e}")
        return None
