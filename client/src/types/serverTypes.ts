export interface IUserData {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
}

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
