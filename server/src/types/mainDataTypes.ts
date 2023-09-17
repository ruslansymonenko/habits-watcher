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
  data: string;
  dayOfTheWeek: string;
  dayOfWeekNumber: number;
  habits: IMainDataHabit[];
}

export interface IMainDataResponse {
  data: Record<Year, YearData>;
}
