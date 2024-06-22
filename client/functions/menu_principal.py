from bloquear import opcion_bloquear
from marcar import opcion_marcar
from correo import enviar_correo
from informacion import ver_informacion, ver_favoritos


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
            opcion_marcar(correo, clave)
        elif opcion == '5':
            opcion_bloquear(correo,clave)
        elif opcion == '6':
            break
        else:
            print('Opción inválida. Intente de nuevo.')