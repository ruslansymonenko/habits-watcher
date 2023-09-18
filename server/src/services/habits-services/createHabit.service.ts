import { IHabit, IHabitResponse } from '../../types/habitsType';
import database from '../../database/database';

export const createNewHabit = async ({
  title,
  habit_condition,
  color,
  user_id,
  week_days,
  habit_day_start,
  habit_icon,
}: IHabit): Promise<IHabitResponse> => {
  const result: IHabitResponse = {
    isDone: false,
    statusMessage: null,
  };

  try {
    const query = `
      INSERT INTO habits (title, habit_condition, color, user_id, week_days, habit_day_start, habit_icon)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [title, habit_condition, color, user_id, week_days, habit_day_start, habit_icon];
    const newHabit = await database.query(query, values);

    if (newHabit.rows.length > 0) {
      result.isDone = true;
      result.statusMessage = 'Habit created successfully';
      return result;
    } else {
      result.isDone = false;
      result.statusMessage = 'Habit creation error';
      return result;
    }
  } catch (error) {
    result.isDone = false;
    result.statusMessage = `${error}`;
    return result;
  }
};
