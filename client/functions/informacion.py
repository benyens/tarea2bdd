import requests

BASE_URL = "http://localhost:3000/api" #URL de la API

def ver_informacion(correo):
    response = requests.get(f"{BASE_URL}/informacion/{correo}")
    print(response.json())

def ver_favoritos(correo):
    response = requests.get(f"{BASE_URL}/favoritos/{correo}")
    print(response.json())

ver_informacion("sexyen@xvideos.cum")