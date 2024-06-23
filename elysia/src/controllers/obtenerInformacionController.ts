import { Elysia, Context } from 'elysia'; 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RequestBody {
  nombre_usuario: string;
  direccion_correo: string;
  descripcion: string;
}

export async function obtenerInformacionController(body: { nombre_usuario: string, direccion_correo: string, descripcion: string, contrasena: string }) {
    const {  nombre_usuario, direccion_correo, descripcion, contrasena } = body;
    const newUser = await prisma.usuarios.create({
      data: {
        nombre_usuario,
        direccion_correo,
        descripcion,
        contrasena,
      },
    });
}
