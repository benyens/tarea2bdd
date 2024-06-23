import { Elysia, t } from 'elysia';
import { registrarUsuarioController } from '../controllers/registrarUsuarioController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.post('api/registrar', async (req) => {
    const { body } = req as { body: { nombre: string; correo: string; clave: string; descripcion: string; } }; 
    try {
      const result = await registrarUsuarioController(body); 
      return result; 
    } catch (error) {
      throw new Error('Error al registrar usuario');
    }
  });
}