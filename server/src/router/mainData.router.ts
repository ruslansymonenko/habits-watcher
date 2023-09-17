import { Router } from 'express';

import { getMainData } from '../controllers/mainData.controller';
import { checkAuth } from '../middlewares/checkAuth';

const mainDataRouter: Router = Router();

mainDataRouter.get('/get', checkAuth, getMainData);

export default mainDataRouter;
