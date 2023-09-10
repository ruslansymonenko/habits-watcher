import { Request, Response } from 'express';

export const register = (req: Request, res: Response): Response => {
  return res.json({
    message: 'register',
  });
};

export const login = (req: Request, res: Response): Response => {
  return res.json({
    message: 'login',
  });
};
