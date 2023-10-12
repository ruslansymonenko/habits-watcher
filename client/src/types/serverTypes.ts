import { type } from 'os';

//User
export interface IUserData {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
}

//Auth
export interface IDataForAuth {
  email: string;
  password: string;
}

export interface IServerAuthResponse {
  isRequestDone: boolean;
  message: string;
  user: null | IUserData;
  token: null | string;
}

//Main Data
export type Year = string;
export type YearData = IMainDataDay[];

export type WeekDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface IMainDataHabit {
  id: number;
  title: string;
  habit_condition: string;
  color: string;
  user_id: string;
  created_date: string;
  week_days: WeekDays[];
  habit_day_start: string;
  habit_icon: string;
  is_done: boolean;
}

export interface IMainDataDay {
  date: string;
  dayOfTheWeek: string;
  dayOfWeekNumber: number;
  habits: IMainDataHabit[] | null;
}

export interface IMainData {
  data: Record<Year, YearData> | null;
}

export interface IMainDataResponse {
  isDone: boolean;
  data: Record<Year, YearData> | null;
  statusMessage: string | null;
}

export type UserHabits = IMainDataHabit[];

export interface IUserHabitsResponse {
  isDone: boolean;
  data: UserHabits | null;
  statusMessage: string | null;
}
