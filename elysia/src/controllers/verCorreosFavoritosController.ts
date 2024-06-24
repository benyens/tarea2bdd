import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function verCorreosFavoritosController(correoUsuario: string) {
    try {
      const usuario = await prisma.usuarios.findUnique({
        where: { correo: correoUsuario },
        include: {
          correosEnviados: {
            where: {
              correos_favoritos: {
                some: {
                  es_favorito: true,
                },
              },
            },
            include: {
              correos_favoritos: true,
            },
          },
          correosRecibidos: {
            where: {
              correos_favoritos: {
                some: {
                  es_favorito: true,
                },
              },
            },
            include: {
              correos_favoritos: true,
            },
          },
        },
      });
  
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
  
      const correosFavoritos = [
        ...usuario.correosEnviados,
        ...usuario.correosRecibidos,
      ];
  
      return correosFavoritos;
    } catch (error) {
      console.error('Error al obtener los correos favoritos del usuario:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
