import requests

BASE_URL = 'http://localhost:3000/api'  # Reemplaza con la URL de tu servidor

def enviar_correo(correo):
    remitente = correo
    destinatario = input("A quién le quieres enviar el correo? ")
    asunto = input("Cuál es el asunto del correo? ")
    mensaje = input("Cuál es el mensaje del correo? ")

    data = {
        "remitenteId": remitente,
        "destinatarioId": destinatario,
        "asunto": asunto,
        "mensaje": mensaje
    }

    try:
        response = requests.post(f"{BASE_URL}/enviarcorreo", json=data)
        response.raise_for_status()
        nuevo_correo = response.json()
        print("Correo enviado exitosamente.")
        print(f"Asunto: {nuevo_correo['asunto']}")	
        print(f"Mensaje: {nuevo_correo['mensaje']}")
    except requests.exceptions.HTTPError as err:
        if err.response.status_code == 404:
            print("Usuario no encontrado")
        print(f"Error al enviar correo: {err}")
