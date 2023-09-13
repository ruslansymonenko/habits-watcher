import { Request, Response } from 'express';

import { loggerService } from '../services/logger.service';
import { registrationService } from '../services/user-services/registration.service';
import { loginService } from '../services/user-services/login.servise';
import { deleteUserService } from '../services/user-services/deleteUser.service';
import { updateUserService } from '../services/user-services/updateUser.service';

import { IUpdateUserResponse, userData } from '../services/user-services/updateUser.service';

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
          user: userRegistration.user,
          token: userRegistration.token,
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

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const userLogin = await loginService({
        email: email,
        password: password,
      });

      if (userLogin.isDone) {
        loggerService('success', 'successful login');
        return res.json({
          message: userLogin.statusMessage,
          user: userLogin.user,
          token: userLogin.token,
        });
      } else {
        loggerService('error', 'login error, loginServicee: isDone=false');
        return res.json({
          message: userLogin.statusMessage,
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

export const getUser = (req: Request, res: Response): Response => {
  const userId = req.params.id;

  if (userId) {
    return res.json({
      message: 'get user',
    });
  } else {
    return res.json({
      message: 'get user',
    });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { updateType, userId, newData } = req.body;
  let updateServiceResponse: IUpdateUserResponse = {
    isDone: false,
    statusMessage: '',
    user: null,
  };

  if (updateType && newData) {
    switch (updateType) {
      case 'email':
        updateServiceResponse = await updateUserService({
          updateType: 'email',
          userId: userId,
          newData,
        });
        break;
      case 'password':
        updateServiceResponse = await updateUserService({
          updateType: 'password',
          userId: userId,
          newData,
        });
        break;
      case 'name':
        updateServiceResponse = await updateUserService({
          updateType: 'name',
          userId: userId,
          newData,
        });
        break;
      case 'photo':
        updateServiceResponse = await updateUserService({
          updateType: 'photo',
          userId: userId,
          newData,
        });
        break;
      default:
        loggerService('error', 'wrong type of updated data');
        return res.json({
          message: 'the type of data being updated does not match any of the installed ones',
        });
    }

    if (updateServiceResponse.isDone === true) {
      loggerService('success', 'The data was successfully updated');
      return res.json({
        message: updateServiceResponse.statusMessage,
        user: updateServiceResponse.user,
      });
    } else {
      loggerService('error', 'Erorr with updating data on Update User Service');
      return res.json({
        message: updateServiceResponse.statusMessage,
      });
    }
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
