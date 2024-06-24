import { Elysia, t } from 'elysia';
import { bloquearUsuarioController } from '../controllers/bloquearUsuarioController';

export default function configureBloquearUsuarioRoutes(app: Elysia) {
  app.post('/api/bloquearusuario', async (req) => {
    const { body } = req as { body: { usuarioId: string; clave: string; direccion_bloqueada: string } }; 
    try {
      const result = await bloquearUsuarioController({
        usuarioId: body.usuarioId,
        clave: body.clave,
        direccion_bloqueada: body.direccion_bloqueada,
      });
      return result; 
    } catch (error) {
      throw new Error('Error al bloquear usuario');
    }
  }, {
    body: t.Object({
      usuarioId: t.String(),
      clave: t.String(),
      direccion_bloqueada: t.String(),
    })
  });
}