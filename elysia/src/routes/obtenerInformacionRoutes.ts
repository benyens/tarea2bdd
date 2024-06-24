import { Elysia, t } from 'elysia';
import { obtenerInformacionController } from '../controllers/obtenerInformacionController';

export default function configureObtenerInformacionRoutes(app: Elysia) {
  app.get('/api/informacion/:correo', async (req) => {
    const { params } = req; 
    try {
      const result = await obtenerInformacionController({ correo: params.correo });
      return result; 
    } catch (error) {
      throw new Error('Error al obtener información');
    }
  });
}