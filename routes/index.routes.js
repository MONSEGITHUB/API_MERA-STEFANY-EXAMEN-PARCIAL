
import libroRouter from './libreria.routes.js'; 
import { Router } from 'express';

const apiRouter = Router(); 
apiRouter.use('/libros', libroRouter); 

export default apiRouter; 

