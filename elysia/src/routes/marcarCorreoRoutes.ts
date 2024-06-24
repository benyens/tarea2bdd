import { Elysia, t } from 'elysia';
import { marcarCorreoController } from '../controllers/marcarCorreoController';

export default function configureMarcarCorreoRoutes(app: Elysia) {
  app.post('/api/marcarcorreo', async (req) => {
    const { body } = req as { body: { usuarioId: string; clave: string; correoId: number } }; 
    try {
      const result = await marcarCorreoController({
        usuarioId: body.usuarioId,
        clave: body.clave,
        correoId: Number(body.correoId), 
      });
      return result; 
    } catch (error) {
      throw new Error('Error al marcar correo');
    }
  }, {
    body: t.Object({
      usuarioId: t.String(),
      clave: t.String(),
      correoId: t.Number()
    })
  });
}