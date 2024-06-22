import requests

BASE_URL = "http://localhost:3000/api"

def registrar_usuario(nombre, correo, clave, descripcion):
    response = requests.post(f"{BASE_URL}/registrar", json={
        "nombre": nombre,
        "correo": correo,
        "clave": clave,
        "descripcion": descripcion
    })
    print(response.json())

def bloquear_usuario(correo, clave, correo_bloquear):
    response = requests.post(f"{BASE_URL}/bloquear", json={
        "correo": correo,
        "clave": clave,
        "correo_bloquear": correo_bloquear
    })
    print(response.json())

def obtener_informacion(correo):
    response = requests.get(f"{BASE_URL}/informacion/{correo}")
    print(response.json())

def marcar_correo(correo, clave, id_correo_favorito):
    response = requests.post(f"{BASE_URL}/marcarcorreo", json={
        "correo": correo,
        "clave": clave,
        "id_correo_favorito": id_correo_favorito
    })
    print(response.json())

def desmarcar_correo(correo, clave, id_correo_favorito):
    response = requests.delete(f"{BASE_URL}/desmarcarcorreo", json={
        "correo": correo,
        "clave": clave,
        "id_correo_favorito": id_correo_favorito
    })
    print(response.json())

# Ejemplos de uso
registrar_usuario("Daniel", "daniel.duenas@usm.cl", "clavecita123", "Una descripcion que puede escribir el usuario")
bloquear_usuario("daniel.duenas@usm.cl", "clavecita123", "fernando.banz@sansano.usm.cl")
obtener_informacion("daniel.duenas@usm.cl")
marcar_correo("daniel.duenas@usm.cl", "clavecita123", 1)
desmarcar_correo("fernando.banz@sansano.usm.cl", "clavecita123", 1)