import { Router } from 'express';

import { register, login, getUser, updateUser, deleteUser } from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/get/:id', getUser);

userRouter.put('/update', updateUser);

userRouter.delete('/delete/:id', deleteUser);

export default userRouter;
