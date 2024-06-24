
from functions.bloquear import opciones_bloquear
from functions.marcar import opciones_marcar
from functions.correo import enviar_correo
from functions.informacion import ver_informacion, ver_favoritos

BASE_URL = "http://localhost:3000/api" #URL de la API

def menu(correo, clave):
    while True:
        print('\nMenú Principal:')
        print('1. Enviar un correo')
        print('2. Ver información de una dirección de correo electrónico')
        print('3. Ver correos marcados como favoritos')
        print('4. Marcar/Desmarcar correo como favorito')
        print('5. Bloquear/Desbloquear usuario')	
        print('6. Terminar con la ejecución del cliente')
        
        opcion = input('\nIngrese el número de la opción deseada: ')

        if opcion == '1':
            enviar_correo(correo)
        elif opcion == '2':
            ver_informacion(correo)
        elif opcion == '3':
            ver_favoritos(correo)
        elif opcion == '4':
            opciones_marcar(correo, clave)
        elif opcion == '5':
            opciones_bloquear(correo,clave)
        elif opcion == '6':
            break
        else:
            print('Opción inválida. Intente de nuevo.')
