
from functions.registrar_usuario import registrar
from functions.sesion import iniciar_sesion
from functions.menu_principal import menu


def main():
    print("Bienvenido a la aplicación de correo CommuniKen\n")
    print("1. Iniciar sesión\n2. Registrarse\n")
    opcion = input("Ingrese una opción: ")
    if opcion == "1":
        correo, clave = iniciar_sesion()
        if iniciar_sesion:
            menu(correo, clave)
    elif opcion == "2":
        correo, clave = registrar()
        if registrar:
            menu(correo, clave)

main()