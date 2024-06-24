import { Elysia } from 'elysia';
import useRegistrarUsuarioRoutes from './routes/registrarUsuarioRoutes';
import useBloquearUsuarioRoutes from './routes/bloquearUsuarioRoutes';
import useObtenerInformacionRoutes from './routes/obtenerInformacionRoutes';
import useMarcarCorreoRoutes from './routes/marcarCorreoRoutes';
import useDesmarcarCorreoRoutes from './routes/desmarcarCorreoRoutes';
import useVerCorreosFavoritosRoutes from './routes/verCorreosFavoritosRoutes';
import useEnviarCorreoRoutes from './routes/enviarCorreoRoutes';
import useIniciarSecionRoutes from './routes/iniciarSesionRoutes';

const app = new Elysia();

useRegistrarUsuarioRoutes(app);
useBloquearUsuarioRoutes(app);
useObtenerInformacionRoutes(app);
useMarcarCorreoRoutes(app);
useDesmarcarCorreoRoutes(app);
useVerCorreosFavoritosRoutes(app);
useEnviarCorreoRoutes(app);
useIniciarSecionRoutes(app);

app.listen(3000, () => {
  console.log('Servidor Elysia escuchando en el puerto 3000');
});