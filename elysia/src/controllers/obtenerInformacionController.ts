import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function obtenerInformacionController(body: { nombre: string, correo: string, descripcion: string, clave: string }) {
    const {  nombre, correo, descripcion, clave } = body;

    if (!nombre || !correo || !clave || !descripcion) {
      throw new Error('Faltan campos por llenar');
    }

    try {
      const newUser = await prisma.usuarios.create({
        data: {
          nombre,
          correo,
          descripcion,
          clave
        },
      });
      return newUser;
    }  catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw new Error('No se pudo registrar el usuario');
    } finally {
        await prisma.$disconnect();
    }
}
