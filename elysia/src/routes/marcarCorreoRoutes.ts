import { Elysia, t } from 'elysia';
import { marcarCorreoController } from '../controllers/marcarCorreoController';

export default function configureMarcarCorreoRoutes(app: Elysia) {
  app.post('/api/marcarcorreo', async (req) => {
    const { body } = req as { body: { correo: string; contrasena: string; direccion_favorita: string } }; 
    try {
      const result = await marcarCorreoController(body); 
      return result; 
    } catch (error) {
      throw new Error('Error al marcar correo');
    }
  }, {
    body: t.Object({
      correo: t.String(),
      contrasena: t.String(),
      direccion_favorita: t.String()
    })
  });
}