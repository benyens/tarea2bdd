import { Elysia, t } from 'elysia';
import { desmarcarCorreoController } from '../controllers/desmarcarCorreoController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.get('/api/desmarcarcorreo', ({params:{body }}) => desmarcarCorreoController(body), {
    body: t.Object({
        direccion_correo : t.String(), 
        contrasena: t.String(),
        direccion_favorita: t.String()
    })
  });
}