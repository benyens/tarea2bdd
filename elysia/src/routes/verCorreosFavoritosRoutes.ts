import { Elysia, t } from 'elysia';
import { verCorreosFavoritosController } from '../controllers/verCorreosFavoritosController';

export default function configureVerCorreosFavoritosRoutes(app: Elysia) {
  app.post('/api/favoritos/:correoUsuario', async (req) => {
    const { body } = req as { body: { correoUsuario: string } };
    try {
      const correos = await verCorreosFavoritosController(body.correoUsuario);
      return correos;
    } catch (error) {
      throw new Error('Error al obtener correos favoritos');
    }
  }, {
    body: t.Object({
      correoUsuario: t.String(),
    })
  });
}