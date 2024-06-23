import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function bloquearUsuarioController(body: { correo: string, clave: string, correo_bloquear: string}) {
    const { correo, clave, correo_bloquear } = body;

    if ( !correo || !clave || !correo_bloquear) {
        throw new Error('Faltan campos por llenar');
    }

    try {
        const newUser = await prisma.usuarios.create({
            data: {
                correo,
                clave,
                bloqueados,
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
