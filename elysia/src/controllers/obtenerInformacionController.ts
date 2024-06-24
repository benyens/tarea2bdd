import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function obtenerInformacionController(body: { correo: string }) {
    const { correo } = body;

    if (!correo) {
        throw new Error('El campo correo es obligatorio');
    }

    try {
        const usuario = await prisma.usuarios.findUnique({
            where: {
                correo: correo,
            },
            select: {
                nombre: true,
                correo: true,
                descripcion: true,
            },
        });

        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        return usuario;
    } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
        throw new Error('No se pudo obtener la información del usuario');
    }
}