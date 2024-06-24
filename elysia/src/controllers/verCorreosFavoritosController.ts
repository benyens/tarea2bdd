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

    // Filtrar correos favoritos dentro de los correos enviados
    const correosFavoritosEnviados = usuario.correosEnviados.filter(correoEnviado =>
      correoEnviado.correos_favoritos.length > 0
    );

    // Filtrar correos favoritos dentro de los correos recibidos
    const correosFavoritosRecibidos = usuario.correosRecibidos.filter(correoRecibido =>
      correoRecibido.correos_favoritos.length > 0
    );

    // Unir los correos favoritos enviados y recibidos en una sola lista
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