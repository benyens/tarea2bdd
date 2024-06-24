import { Elysia, t } from 'elysia';
import { enviarCorreoController } from '../controllers/enviarCorreoController';

interface EnviarCorreoInput {
  remitenteId: string;
  destinatarioId: string;
  asunto: string;
  mensaje: string;
}

export default function configureEnviarCorreoRoutes(app: Elysia) {
  app.post('/api/enviarcorreo', async (req) => {
    const { body } = req as { body: EnviarCorreoInput };
    try {
      const nuevoCorreo = await enviarCorreoController(body);
      return nuevoCorreo;
    } catch (error) {
      throw new Error('Error al enviar correo');
    }
  }, {
    body: t.Object({
      remitenteId: t.String(),
      destinatarioId: t.String(),
      asunto: t.String(),
      mensaje: t.String()
    })
  });
}