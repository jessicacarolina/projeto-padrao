import { Router } from 'express';
import teste from './teste.routes';

const routes = Router();

routes.use('/teste', teste);

export default routes;
