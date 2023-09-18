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

export interface IMainData {
  data: Record<Year, YearData> | null;
}

export interface IMainDataResponse {
  isDone: boolean;
  data: Record<Year, YearData> | null;
  statusMessage: string | null;
}
