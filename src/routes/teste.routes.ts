import { Router } from 'express';

import { insertTest, getAllTest } from '../app/controllers/index';

const teste = Router();

teste.post('/', insertTest);
teste.get('/', getAllTest);

export default teste;
