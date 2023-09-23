import { Router } from 'express';

import { createHabit, updateHabit, deleteHabit, getHabits } from '../controllers/habits.controller';

import { checkAuth } from '../middlewares/checkAuth';

const habitsRouter: Router = Router();

habitsRouter.post('/create', checkAuth, createHabit);

habitsRouter.get('gethabits', checkAuth, getHabits);

habitsRouter.put('/update', checkAuth, updateHabit);

habitsRouter.post('/delete', checkAuth, deleteHabit);

export default habitsRouter;
