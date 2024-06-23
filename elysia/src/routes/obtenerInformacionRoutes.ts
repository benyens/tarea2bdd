import { Elysia, t } from 'elysia';
import { obtenerInformacionController } from '../controllers/obtenerInformacionController';

export default function configureObtenerInformacionRoutes(app: Elysia) {
  app.get('/api/informacion/:correo', async (req) => {
    const { params } = req; 
    try {
      const result = await obtenerInformacionController(params); // 
      return result; 
    } catch (error) {
      throw new Error('Error al obtener información');
    }
  }, {
    schema: {
      params: t.Object({
        correo: t.String(), 
      }),
      response: {
        200: t.Object({
          nombre: t.String(),
          correo: t.String(),
          descripcion: t.String(),
        }),
      },
    }
  });
}