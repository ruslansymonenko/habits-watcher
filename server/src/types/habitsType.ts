export type WeekDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface IHabit {
  id: number;
  title: string;
  habit_condition: string;
  color: string;
  user_id: string;
  week_days: WeekDays[];
  habit_day_start: string;
  habit_icon: string;
  created_date: string;
  is_done: boolean;
}

export interface IHabitResponse {
  isDone: boolean;
  data: IHabit[] | IHabit | null;
  statusMessage: string | null;
}
