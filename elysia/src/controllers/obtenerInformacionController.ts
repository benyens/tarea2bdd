import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function obtenerInformacionController(body: { nombre: string, correo: string, descripcion: string }) {
    const {  nombre, correo, descripcion } = body;

    if (!nombre || !correo || !descripcion) {
      throw new Error('Faltan campos por llenar');
    }

    try {
      const newUser = await prisma.usuarios.findUnique({
        where: {
          correo: correo
      },
      select: {
        nombre: true,
        correo: true,
        descripcion: true,
      }
    });
      return newUser;
    }  catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw new Error('No se pudo registrar el usuario');
    } finally {
        await prisma.$disconnect();
    }
}
