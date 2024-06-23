import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RequestBody {
  nombre_usuario: string;
  direccion_correo: string;
  contrasena: string;
  descripcion: string;
}

export async function marcarCorreoController(body: { nombre_usuario: string, direccion_correo: string, contrasena: string, descripcion: string }) {
    const { nombre_usuario, direccion_correo, contrasena, descripcion } = body;
    // Crear usuario en la base de datos utilizando Prisma
    const newUser = await prisma.usuarios.create({
      data: {
        direccion_correo,
        nombre_usuario,
        contrasena,
        descripcion,
      },
    });
}
