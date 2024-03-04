from getpass import getpass

# Diccionario de usuarios
usuarios = {
    "nombre1": "contraseña1",
    "nombre2": "contraseña2",
}

# Función de login
def login():
    while True:
        nombre = input("Ingresa tu nombre: ")
        contraseña = getpass("Ingresa tu contraseña: ")

        if nombre in usuarios and usuarios[nombre] == contraseña:
            return nombre
        else:
            print("Credenciales incorrectas. Intenta de nuevo.")

# Función para mostrar el menú principal
def menu_principal(nombre_usuario):
    while True:
        print(f"\n¡Bienvenido, {nombre_usuario}!")
        print("Opciones:")
        print("1. Ver perfil")
        print("2. Cambiar contraseña")
        print("3. Salir")

        opcion = input("Elige una opción: ")

        if opcion == "1":
            print("Tu perfil...")
        elif opcion == "2":
            print("Cambiar contraseña...")
        elif opcion == "3":
            print("¡Hasta pronto!")
            break
        else:
            print("Opción no válida.")

# Inicio del programa
nombre_usuario = login()

# Mostrar el menú principal
menu_principal(nombre_usuario)
