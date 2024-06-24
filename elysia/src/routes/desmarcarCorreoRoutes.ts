import { Elysia, t } from 'elysia';
import { desmarcarCorreoController } from '../controllers/desmarcarCorreoController';

export default function configureDesmarcarCorreoRoutes(app: Elysia) {
  app.post('/api/desmarcarcorreo', async (req) => {
    const { body } = req as { body: { usuarioId: string; clave: string; correoId: number } }; 
    try {
      const result = await desmarcarCorreoController({
        usuarioId: body.usuarioId,
        clave: body.clave,
        correoId: Number(body.correoId), 
      });
      return result; 
    } catch (error) {
      throw new Error('Error al desmarcar correo');
    }
  }, {
    body: t.Object({
      usuarioId: t.String(),
      clave: t.String(),
      correoId: t.Number()
    })
  });
}