import { Elysia, t } from 'elysia';
import { iniciarSesionController } from '../controllers/iniciarSesionController';

export default function configureIniciarSesionRoutes(app: Elysia) {
  app.post('/api/iniciar_sesion', async (req) => {
    const { body } = req as { body: { correo: string; clave: string } };
    try {
      const result = await iniciarSesionController(body);
      return result; 
    } catch (error) {
      throw new Error('Error al iniciar sesión');
    }
  }, {
    body: t.Object({
      correo: t.String(),
      clave: t.String(),
    })
  });
}