import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function marcarCorreoController(body: { nombre: string, correo: string, clave: string, descripcion: string }) {
    const { nombre, correo, clave, descripcion } = body;
    // Crear usuario en la base de datos utilizando Prisma
    const newUser = await prisma.usuarios.create({
      data: {
        correo,
        nombre,
        clave,
        descripcion,
      },
    });
}
