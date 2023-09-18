import { Request, Response } from 'express';
import { CustomRequestWithID } from '../types/userType';
import { IHabitResponse } from '../types/habitsType';

import { loggerService } from '../services/logger.service';

import { createNewHabit } from '../services/habits-services/createHabit.service';

export const createHabit = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  try {
    const userId = req.userId?.toString();
    const { title, habit_condition, color, week_days, habit_day_start } = req.body;

    if (!title || !habit_condition || !color || !userId || !week_days) {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'Not correct data',
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
      };
      return res.json(response);
    }

    if (
      typeof title === 'string' &&
      typeof habit_condition === 'string' &&
      typeof color === 'string' &&
      typeof userId === 'string' &&
      typeof habit_day_start === 'string'
    ) {
      const newHabit = await createNewHabit({
        title: title,
        habit_condition: habit_condition,
        color: color,
        user_id: userId,
        week_days: week_days,
        habit_day_start: habit_day_start,
      });

      const response: IHabitResponse = {
        isDone: newHabit.isDone,
        statusMessage: newHabit.statusMessage,
      };
      return res.json(response);
    } else {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'Not correct data types',
      };
      return res.json(response);
    }
  } catch (error) {
    const response: IHabitResponse = {
      isDone: false,
      statusMessage: 'Server error, please, try later',
    };
    loggerService('error', `${error}`);
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
