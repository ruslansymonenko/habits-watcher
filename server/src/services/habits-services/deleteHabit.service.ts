import database from '../../database/database';
import { IHabitResponse } from '../../types/habitsType';

interface IDeleteHabitsService {
  userId: string;
  habitId: string;
}

export const deleteHabitService = async ({
  userId,
  habitId,
}: IDeleteHabitsService): Promise<IHabitResponse> => {
  try {
    const query = {
      text: 'SELECT * FROM habits WHERE user_id = $1',
      values: [userId],
    };
    const { rows } = await database.query(query);
    const habitToDelete = rows.find((habit) => habit.id === parseInt(habitId));

    if (habitToDelete) {
      const deleteQuery = {
        text: 'DELETE FROM habits WHERE id = $1',
        values: [habitId],
      };

      await database.query(deleteQuery);
      const result: IHabitResponse = {
        isDone: true,
        data: null,
        statusMessage: 'Habit was successfully deleted',
      };

      return result;
    } else {
      const result: IHabitResponse = {
        isDone: false,
        data: null,
        statusMessage: 'Habit not found',
      };

      return result;
    }
  } catch (error) {
    const result: IHabitResponse = {
      isDone: false,
      data: null,
      statusMessage: null,
    };

    return result;
  }
};
