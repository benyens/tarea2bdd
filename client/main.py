import requests
from functions import bloquear, marcar, registrar_usuario, informacion, sesion, menu_principal


def main():
    print("Bienvenido a la aplicación de correo CommuniKen\n")
    print("1. Iniciar sesión\n2. Registrarse\n")
    opcion = input("Ingrese una opción: ")
    if opcion == "1":
        correo, clave = sesion.iniciar_sesion()
        if sesion.iniciar_sesion:
            menu_principal.menu(correo, clave)
    elif opcion == "2":
        correo, clave = registrar_usuario.registrar_usuario()
        if registrar_usuario.registrar_usuario:
            menu_principal.menu(correo, clave)

    

    

        
# Ejemplos de uso
registrar_usuario("Daniel", "daniel.duenas@usm.cl", "clavecita123", "Una descripcion que puede escribir el usuario")
bloquear.bloquear_usuario("daniel.duenas@usm.cl", "clavecita123", "fernando.banz@sansano.usm.cl")
informacion.ver_informacion("daniel.duenas@usm.cl")
marcar.marcar_correo("daniel.duenas@usm.cl", "clavecita123", 1)
marcar.desmarcar_correo("fernando.banz@sansano.usm.cl", "clavecita123", 1)