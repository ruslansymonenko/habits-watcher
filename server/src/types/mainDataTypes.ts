type Year = string;
export type YearData = IMainDataDay[];

export interface IMainDataHabit {
  name: string;
  icon: string;
  condition: string;
  color: string;
  status: boolean;
}

export interface IMainDataDay {
  date: string;
  dayOfTheWeek: string;
  dayOfWeekNumber: number;
  habits: IMainDataHabit[] | null;
}

export interface IMainDataResponse {
  isDone: boolean;
  data: Record<Year, YearData> | null;
  statusMessage: string | null;
}
