import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface EnviarCorreoInput {
  remitenteId: string;
  destinatarioId: string;
  asunto: string;
  mensaje: string;
}

// Función para enviar un correo (crear una nueva entrada en la tabla 'correos')
export async function enviarCorreoController(input: EnviarCorreoInput) {
  const { remitenteId, destinatarioId, asunto, mensaje } = input;

  try {
    const nuevoCorreo = await prisma.correos.create({
      data: {
        remitenteId,
        destinatarioId,
        asunto,
        mensaje,
        fecha_envio: new Date(),
      },
    });

    return nuevoCorreo;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


