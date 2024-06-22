import requests
from baseurl import BASE_URL

def obtener_informacion(correo):
    response = requests.get(f"{BASE_URL}/informacion/{correo}")
    print(response.json())

def ver_favoritos(correo):
    response = requests.get(f"{BASE_URL}/favoritos/{correo}")
    print(response.json())