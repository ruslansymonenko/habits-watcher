import { IHabit } from './habitsType';

type Year = string;
export type YearData = IMainDataDay[];

export interface IMainDataDay {
  date: string;
  dayOfTheWeek: string;
  dayOfWeekNumber: number;
  habits: IHabit[] | null;
}

export interface IMainDataResponse {
  isDone: boolean;
  data: Record<Year, YearData> | null;
  statusMessage: string | null;
}
