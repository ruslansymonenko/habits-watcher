import { Router } from 'express';

import userRouter from './user.router';
import mainDataRouter from './mainData.router';

const router: Router = Router();

router.use('/user', userRouter);

router.use('/data', mainDataRouter);

export default router;
