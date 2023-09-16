import { Router } from 'express';

import { register, login, getUser, updateUser, deleteUser } from '../controllers/user.controller';
import { checkAuth } from '../middlewares/checkAuth';

const userRouter: Router = Router();

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/get', checkAuth, getUser);

userRouter.put('/update', checkAuth, updateUser);

userRouter.post('/delete', checkAuth, deleteUser);

export default userRouter;
