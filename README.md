Esta API permite gestionar usuarios y correos, proporcionando funcionalidades como registrar usuarios, bloquear usuarios, obtener información pública de usuarios, marcar y desmarcar correos como favoritos.

## Tecnologías Utilizadas

- Node.js
- TypeScript
- Elysia
- Prisma
- PostgreSQL

## Instalación y Configuración

### Requisitos Previos

- Node.js y npm
- PostgreSQL

### Pasos de Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. Instalar las dependencias:

  npm install

3.Configurar la base de datos:

    Asegúrate de tener una base de datos PostgreSQL en funcionamiento.

    Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

    DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_de_tu_base_de_datos"

4.Ejecutar las migraciones de Prisma:


  npx prisma migrate dev --name init
  npx prisma generate

5.Iniciar el servidor:


  npm run start

El servidor estará disponible en http://localhost:3000.
