import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function marcarCorreoController(body: { correo: string; clave: string; direccion_favorita: string }): Promise<any> {
    const { correo, clave, direccion_favorita } = body;

    if (!correo || !clave || !direccion_favorita) {
        throw new Error('Faltan campos por llenar');
    }

    try {
        // Verificar si el usuario existe y la contraseña es correcta
        const usuario = await prisma.usuarios.findUnique({
            where: { correo: correo }
        });

        if (!usuario || usuario.clave !== clave) {
            throw new Error('Usuario no encontrado o contraseña incorrecta');
        }

        // Marcar la dirección como favorita
        const direccionFavorita = await prisma.direcciones_favoritas.create({
            data: {
                usuarioId: correo,
                direccion_favorita: direccion_favorita,
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
