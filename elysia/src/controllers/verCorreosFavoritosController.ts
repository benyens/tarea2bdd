import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function verCorreosFavoritosController(correoUsuario: string) {
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { correo: correoUsuario },
      include: {
        correosEnviados: {
          include: {
            correos_favoritos: true,
          },
        },
        correosRecibidos: {
          include: {
            correos_favoritos: true,
          },
        },
      },
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    const correosFavoritosEnviados = usuario.correosEnviados.filter(correo => correo.correos_favoritos.length > 0);
    const correosFavoritosRecibidos = usuario.correosRecibidos.filter(correo => correo.correos_favoritos.length > 0);

    const correosFavoritos = [
      ...correosFavoritosEnviados,
      ...correosFavoritosRecibidos,
    ];

    return correosFavoritos;
  } catch (error) {
    console.error('Error al obtener los correos favoritos del usuario:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}