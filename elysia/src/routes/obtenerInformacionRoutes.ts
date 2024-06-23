import { Elysia, t } from 'elysia';
import { obtenerInformacionController } from '../controllers/obtenerInformacionController';

export default function configureRegistrarUsuarioRoutes(app: Elysia) {
  app.get('/api/informacion/`', ({params:{body }}) => obtenerInformacionController(body), {
    body: t.Object({
        nombre: t.String(),
        direccion_correo : t.String(), 
        descripcion: t.String()
    })
  });
}