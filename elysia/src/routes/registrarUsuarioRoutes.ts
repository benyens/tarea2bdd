import { Elysia, t } from 'elysia';
import { registrarUsuarioController } from '../controllers/registrarUsuarioController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.post('/api/registrar', ({params:{body }}) => registrarUsuarioController(body), {
    body: t.Object({
        nombre: t.String(),
        correo : t.String(), 
        clave: t.String(),
        descripcion: t.String()
    })
  });
}