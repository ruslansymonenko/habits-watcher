import database from '../../database/database';
import { generateYearArray } from '../../helpers/generateYearArray';
import { IMainDataResponse, IMainDataHabit, IMainDataDay } from '../../types/mainDataTypes';

import { formatDbDate } from '../../helpers/formatDbDate';

import { IHabit } from '../../types/habitsType';

export const generateMainData = async (userId: string): Promise<IMainDataResponse> => {
  try {
    const year = generateYearArray();

    const query = {
      text: 'SELECT * FROM habits WHERE user_id = $1',
      values: [userId],
    };

    const userHabits = (await database.query(query)).rows;

    const yearWithData = year.map((day) => {
      const habitsForDay = userHabits.filter((habitObj) => {
        const habitStartDate = new Date(
          formatDbDate(habitObj.habit_day_start).split('/').reverse().join('/'),
        );
        const dayDate = new Date(day.date.split('/').reverse().join('/'));
        return dayDate >= habitStartDate && habitObj.week_days.includes(day.dayOfWeekNumber);
      });

      if (habitsForDay.length) {
        return {
          ...day,
          habits: habitsForDay,
        };
      } else {
        return {
          ...day,
          habits: null,
        };
      }
    });

    const data: IMainDataResponse = {
      isDone: true,
      data: {
        '2023': yearWithData,
      },
      statusMessage: 'Data was received',
    };

    return data;
  } catch (error) {
    const data: IMainDataResponse = {
      isDone: false,
      data: null,
      statusMessage: `${error}`,
    };

    return data;
  }
};
