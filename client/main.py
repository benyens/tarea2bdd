import requests
from client.functions import informacion
from functions import bloquear_usuario, desmarcar_correo, marcar_correo, registrar_usuario, obtener_informacion, iniciar_sesion, menu


def main():
    print("Bienvenido a la aplicación de correo CommuniKen\n")
    correo, clave = iniciar_sesion()

    if iniciar_sesion:
        menu(correo, clave)

        
# Ejemplos de uso
registrar_usuario("Daniel", "daniel.duenas@usm.cl", "clavecita123", "Una descripcion que puede escribir el usuario")
bloquear_usuario("daniel.duenas@usm.cl", "clavecita123", "fernando.banz@sansano.usm.cl")
informacion("daniel.duenas@usm.cl")
marcar_correo("daniel.duenas@usm.cl", "clavecita123", 1)
desmarcar_correo("fernando.banz@sansano.usm.cl", "clavecita123", 1)