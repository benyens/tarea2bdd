import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function bloquearUsuarioController(body: { usuarioId: string; clave: string; direccion_bloqueada: string }): Promise<any> {
    const { usuarioId, clave, direccion_bloqueada } = body;

    if (!usuarioId || !clave || !direccion_bloqueada) {
        throw new Error('Faltan campos por llenar');
    }

    try {
        // Verificar si el usuario existe y la contraseña es correcta
        const usuario = await prisma.usuarios.findUnique({
            where: { correo: usuarioId },
        });

        if (!usuario || usuario.clave !== clave) {
            throw new Error('Correo o contraseña incorrectos');
        }

        // Verificar si la dirección ya está bloqueada
        const direccionBloqueadaExistente = await prisma.direcciones_bloqueadas.findFirst({
            where: {
                usuarioId: usuarioId,
                direccion_bloqueada: direccion_bloqueada,
            },
        });

        if (direccionBloqueadaExistente) {
            throw new Error('La dirección ya está bloqueada');
        }

        // Bloquear la dirección
        const direccionBloqueada = await prisma.direcciones_bloqueadas.create({
            data: {
                usuarioId: usuarioId,
                direccion_bloqueada: direccion_bloqueada,
            },
        });

        return direccionBloqueada;
    } catch (error) {
        console.error('Error al bloquear la dirección:', error);
        throw new Error('No se pudo bloquear la dirección');
    } finally {
        await prisma.$disconnect();
    }
}