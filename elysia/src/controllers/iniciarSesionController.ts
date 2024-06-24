import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IniciarSesionInput {
  correo: string;
  clave: string;
}

export async function iniciarSesionController(input: IniciarSesionInput) {
  const { correo, clave } = input;

  try {
    // Buscar al usuario por correo
    const usuario = await prisma.usuarios.findUnique({
      where: { correo },
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar la contraseña 
    if (usuario.clave !== clave) {
      throw new Error('Clave incorrecta');
    }

    // Retornar la información del usuario
    const { clave: _, ...usuarioSinClave } = usuario;
    return usuarioSinClave;

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}