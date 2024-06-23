import { Elysia, t } from 'elysia';
import { bloquearUsuarioController } from '../controllers/bloquearUsuarioController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.post('/api/bloquear', ({params:{body }}) => bloquearUsuarioController(body), {
    body: t.Object({
        correo : t.String(), 
        clave: t.String(),
        correo_bloqueada: t.String()
    })
  });
}