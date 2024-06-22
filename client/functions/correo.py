import requests
from baseurl import BASE_URL

def enviar_correo(remitente):
    destinatario = input("A quién le quieres enviar el correo?")
    asunto = input("Cuál es el asunto del correo?")
    mensaje = input("Cuál es el mensaje del correo?")

    data = {
        "remitente": remitente,
        "destinatario": destinatario,
        "asunto": asunto,
        "mensaje": mensaje
    }

    response = requests.post(f"{BASE_URL}/correo", json=data)
    print(response.json())