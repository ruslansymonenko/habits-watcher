import { Request, Response } from 'express';
import { CustomRequestWithID } from '../types/userType';
import { IHabitResponse } from '../types/habitsType';

import { loggerService } from '../services/logger.service';

import { createNewHabit } from '../services/habits-services/createHabit.service';
import { getUserHabits } from '../services/habits-services/getUserHabits.service';

export const createHabit = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  try {
    const userId = req.userId?.toString();
    const { title, habit_condition, color, week_days, habit_day_start, habit_icon } = req.body;

    if (!title || !habit_condition || !color || !userId || !habit_day_start) {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'Not correct data',
        data: null,
      };
      loggerService('error', 'Not correct data for creating habit');
      return res.json(response);
    }

    const isValidWeekDays = (weekDays: number[]): boolean => {
      const validDays = [1, 2, 3, 4, 5, 6, 7]; // Valid days are 1 to 7 (Monday to Sunday)
      for (const day of weekDays) {
        if (!validDays.includes(day)) {
          return false;
        }
      }
      return true;
    };

    if (!Array.isArray(week_days) || !isValidWeekDays(week_days)) {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'Not correct week days',
        data: null,
      };
      return res.json(response);
    }

    if (
      typeof title === 'string' &&
      typeof habit_condition === 'string' &&
      typeof color === 'string' &&
      typeof userId === 'string' &&
      typeof habit_day_start === 'string' &&
      typeof habit_icon === 'string'
    ) {
      const newHabit = await createNewHabit({
        title: title,
        habit_condition: habit_condition,
        color: color,
        user_id: userId,
        week_days: week_days,
        habit_day_start: habit_day_start,
        habit_icon: habit_icon,
      });

      const response: IHabitResponse = {
        isDone: newHabit.isDone,
        statusMessage: newHabit.statusMessage,
        data: newHabit.data,
      };
      return res.json(response);
    } else {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'Not correct data types',
        data: null,
      };
      return res.json(response);
    }
  } catch (error) {
    const response: IHabitResponse = {
      isDone: false,
      statusMessage: 'Server error, please, try later',
      data: null,
    };
    loggerService('error', `${error}`);
    return res.json(response);
  }
};

export const getHabits = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  try {
    const userId = req.userId;

    if (userId) {
      const databaseResponse = await getUserHabits({ user_id: userId });
      const response: IHabitResponse = {
        isDone: databaseResponse.isDone,
        statusMessage: databaseResponse.statusMessage,
        data: databaseResponse.data,
      };
      return res.json(response);
    } else {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'User Id was not founded',
        data: null,
      };

      return res.json(response);
    }
  } catch (error) {
    const response: IHabitResponse = {
      isDone: false,
      statusMessage: `${error}`,
      data: null,
    };

    return res.json(response);
  }
};

export const updateHabit = (req: Request, res: Response): Response => {
  return res.json({
    message: 'update',
  });
};

export const deleteHabit = (req: Request, res: Response): Response => {
  return res.json({
    message: 'delete',
  });
};
