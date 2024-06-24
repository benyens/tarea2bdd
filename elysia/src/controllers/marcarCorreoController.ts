import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function marcarCorreoController(body: { usuarioId: string; clave: string; correoId: number }): Promise<any> {
    const { usuarioId, clave, correoId } = body;

    if (!usuarioId || !clave || !correoId) {
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

        // Verificar si el correo existe
        const correo = await prisma.correos.findUnique({
            where: { id: correoId },
        });

        if (!correo) {
            throw new Error('Correo no encontrado');
        }

        // Verificar si el correo ya está marcado como favorito
        const correoFavorito = await prisma.correos.findUnique({
            where: { id: correoId},
        });
    
        if (correoFavorito?.es_favorito === true) {
            throw new Error('El correo ya está marcado como favorito');
        }

        // Marcar la dirección como favorita en la tabla correos_favoritos
        const direccionFavorita = await prisma.correos_favoritos.create({
            data: {
                usuarioId: usuarioId,
                correoId: correoId,
                es_favorito: true,
            },
        });

        return direccionFavorita;
    } catch (error) {
        console.error('Error al marcar la dirección como favorita:', error);
        throw new Error('No se pudo marcar la dirección como favorita');
    } finally {
        await prisma.$disconnect();
    }
}