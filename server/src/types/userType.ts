import { Request } from 'express';

export type userData = {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
};

export interface IRegistrationResponse {
  isDone: boolean;
  statusMessage: string;
  user: userData | null;
  token: null | string;
}

export interface CustomRequestWithID extends Request {
  userId?: string;
}
