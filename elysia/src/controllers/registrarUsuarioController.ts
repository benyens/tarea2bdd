import { Elysia, Context } from 'elysia'; 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function registrarUsuarioController(body: { nombre: string, correo: string, clave: string, descripcion: string }) {
    const { nombre, correo, clave, descripcion } = body;

    if (!nombre || !correo || !clave || !descripcion) {
        throw new Error('Faltan campos por llenar');
    }

    try {
        const newUser = await prisma.usuarios.create({
            data: {
                nombre,
                correo,
                clave,
                descripcion,
            },
        });

        return newUser;
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw new Error('No se pudo registrar el usuario');
    } finally {
        await prisma.$disconnect();
    }
};
