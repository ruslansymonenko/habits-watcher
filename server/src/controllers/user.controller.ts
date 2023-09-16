import { Request, Response } from 'express';

import { loggerService } from '../services/logger.service';
import { registrationService } from '../services/user-services/registration.service';
import { loginService } from '../services/user-services/login.servise';
import { deleteUserService } from '../services/user-services/deleteUser.service';
import { updateUserService } from '../services/user-services/updateUser.service';
import { getUserService, IGetUserResponse } from '../services/user-services/getUser.service';

import { IUpdateUserResponse } from '../services/user-services/updateUser.service';
import { userData, IRegistrationResponse } from '../types/userType';
import { CustomRequestWithID } from '../types/userType';

interface IAuthResponse {
  isRequestDone: boolean;
  message: string | null;
  user: null | userData;
  token: null | string;
}

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const userRegistration: IRegistrationResponse = await registrationService({
        email: email,
        password: password,
      });

      if (userRegistration.isDone) {
        loggerService('success', 'successful registration');
        const response: IAuthResponse = {
          isRequestDone: true,
          message: userRegistration.statusMessage,
          user: userRegistration.user,
          token: userRegistration.token,
        };
        return res.json(response);
      } else {
        loggerService('error', 'registration error, registrationService: isDone=false');
        const response: IAuthResponse = {
          isRequestDone: false,
          message: userRegistration.statusMessage,
          user: userRegistration.user,
          token: userRegistration.token,
        };
        return res.json(response);
      }
    } catch (error) {
      loggerService('error', `${error}`);
      const response: IAuthResponse = {
        isRequestDone: false,
        message: 'Wrong auth data was sent to the server, check do you send email and password',
        user: null,
        token: null,
      };
      return res.json(response);
    }
  } else {
    loggerService('error', 'Wrong auth data');
    const response: IAuthResponse = {
      isRequestDone: false,
      message: 'Wrong auth data was sent to the server, check do you send email and password',
      user: null,
      token: null,
    };
    return res.json(response);
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
        const serverResponse: IAuthResponse = {
          isRequestDone: userLogin.isDone,
          message: userLogin.statusMessage,
          user: userLogin.user,
          token: userLogin.token,
        };

        return res.json(serverResponse);
      } else {
        loggerService('error', 'login error, loginServicee: isDone=false');
        const serverResponse: IAuthResponse = {
          isRequestDone: userLogin.isDone,
          message: userLogin.statusMessage,
          user: userLogin.user,
          token: userLogin.token,
        };

        return res.json(serverResponse);
      }
    } catch (error) {
      loggerService('error', `${error}`);
      const serverResponse: IAuthResponse = {
        isRequestDone: false,
        message: 'Wrong auth data was sent to the server, check do you send email and password',
        user: null,
        token: null,
      };

      return res.json(serverResponse);
    }
  } else {
    loggerService('error', 'Wrong auth data');
    const serverResponse: IAuthResponse = {
      isRequestDone: false,
      message: 'Wrong auth data was sent to the server, check do you send email and password',
      user: null,
      token: null,
    };

    return res.json(serverResponse);
  }
};

export const getUser = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  try {
    const userId = req.userId;

    if (userId) {
      const getUserResponse: IGetUserResponse = await getUserService({ id: userId });

      if (getUserResponse.isDone) {
        const serverResponse: IAuthResponse = {
          isRequestDone: getUserResponse.isDone,
          message: null,
          user: getUserResponse.user,
          token: getUserResponse.token,
        };
        return res.json(serverResponse);
      } else {
        const serverResponse: IAuthResponse = {
          isRequestDone: getUserResponse.isDone,
          message: getUserResponse.statusMessage,
          user: getUserResponse.user,
          token: getUserResponse.token,
        };
        return res.json(serverResponse);
      }
    } else {
      const serverResponse: IAuthResponse = {
        isRequestDone: false,
        message: 'User id was not founded',
        user: null,
        token: null,
      };
      return res.json(serverResponse);
    }
  } catch (error) {
    loggerService('error', `${error}`);
    const serverResponse: IAuthResponse = {
      isRequestDone: false,
      message: 'Some error, please try later',
      user: null,
      token: null,
    };
    return res.json(serverResponse);
  }
};

export const updateUser = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  const userId = req.userId;
  const { updateType, newData } = req.body;
  let updateServiceResponse: IUpdateUserResponse = {
    isDone: false,
    statusMessage: '',
    user: null,
  };

  if (updateType && newData && userId) {
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
    loggerService(
      'error',
      'updateType and newData is required for update, or userid was not found',
    );
    return res.json({
      message: 'For update data is required: update type and new data, or userid was not found',
    });
  }
};

export const deleteUser = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  const userId = req.userId;

  if (userId) {
    try {
      const deleteUser = await deleteUserService({ id: userId });

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
