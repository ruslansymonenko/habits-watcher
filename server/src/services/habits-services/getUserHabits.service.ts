import { IHabitResponse } from '../../types/habitsType';
import database from '../../database/database';

interface I_GetUserHabitsProps {
  user_id: string;
}

export const getUserHabits = async ({ user_id }: I_GetUserHabitsProps): Promise<IHabitResponse> => {
  try {
    const habitsData = await database.query('SELECT * FROM habits WHERE user_id = $1;', [user_id]);
    if (habitsData) {
      const response: IHabitResponse = {
        isDone: true,
        statusMessage: 'Habits received',
        data: habitsData.rows,
      };
      return response;
    } else {
      const response: IHabitResponse = {
        isDone: false,
        statusMessage: 'No nabits',
        data: null,
      };
      return response;
    }
  } catch (error) {
    const response: IHabitResponse = {
      isDone: false,
      statusMessage: `${error}`,
      data: null,
    };
    return response;
  }
};
