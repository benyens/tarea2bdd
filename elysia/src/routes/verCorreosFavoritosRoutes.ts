import { Elysia, t } from 'elysia';
import { verCorreosFavoritosController } from '../controllers/verCorreosFavoritosController';

export default function configureVerCorreosFavoritosRoutes(app: Elysia) {
  app.get('/api/favoritos/:correoUsuario', async (req) => {
    const { params } = req as { params: { correoUsuario: string } };
    try {
      const correos = await verCorreosFavoritosController(params.correoUsuario);
      return correos;
    } catch (error) {
      throw new Error('Error al obtener correos favoritos');
    }
  });
}