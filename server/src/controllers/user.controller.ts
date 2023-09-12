import { Request, Response } from 'express';

import { loggerService } from '../services/logger.service';
import { registrationService } from '../services/user-services/registration.service';
import { deleteUserService } from '../services/user-services/deleteUser.service';

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
  const { updateType, newData } = req.body;

  if (updateType && newData) {
    return res.json({
      message: 'login',
    });
  } else {
    loggerService('error', 'updateType and newData is required for update');
    return res.json({
      message: 'For update data is required: update type and new data',
    });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.params.id;

  if (userId) {
    try {
      const deleteUser = await deleteUserService({
        id: userId,
      });

      if (deleteUser.isDone) {
        loggerService('success', `User: ${userId} was deleted`);
        return res.json({
          message: deleteUser.statusMessage,
        });
      } else {
        loggerService('error', 'problem with deleting a user in delete service');
        return res.json({
          message: deleteUser.statusMessage,
        });
      }
    } catch (error) {
      loggerService('error', `${error}`);
      return res.json({
        message: 'Some error, please, try later',
      });
    }
  } else {
    loggerService('error', 'User ID was not found');
    return res.json({
      message: 'User ID is required',
    });
  }
};
