import { Elysia, t } from 'elysia';
import { marcarCorreoController } from '../controllers/marcarCorreoController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.get('/api/marcarcorreo', ({params:{body }}) => marcarCorreoController(body), {
    body: t.Object({
        correo : t.String(), 
        contrasena: t.String(),
        direccion_favorita: t.String()
    })
  });
}