import { Request, Response } from 'express';

import { loggerService } from '../services/logger.service';
import { registrationService } from '../services/user-services/registration.service';

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const userRegistration = await registrationService({
        email: email,
        password: password,
      });

      if (userRegistration.isDone) {
        loggerService('success', 'successful registration');
        return res.json({
          message: userRegistration.statusMessage,
        });
      } else {
        loggerService('error', 'registration error, registrationService: isDone=false');
        return res.json({
          message: userRegistration.statusMessage,
        });
      }
    } catch (error) {
      loggerService('error', `${error}`);
      return res.json({
        message: 'Wrong auth data was sent to the server, check do you send email and password',
      });
    }
  } else {
    loggerService('error', 'Wrong auth data');
    return res.json({
      message: 'Wrong auth data was sent to the server, check do you send email and password',
    });
  }
};

export const login = (req: Request, res: Response): Response => {
  return res.json({
    message: 'login',
  });
};

export const getUser = (req: Request, res: Response): Response => {
  return res.json({
    message: 'login',
  });
};

export const updateUser = (req: Request, res: Response): Response => {
  return res.json({
    message: 'login',
  });
};

export const deleteUser = (req: Request, res: Response): Response => {
  return res.json({
    message: 'login',
  });
};
