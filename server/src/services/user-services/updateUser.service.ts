import database from '../../database/database';

interface IUpdateUserProps {
  updateType: updateTypes;
  newData: string;
}

interface IUpdateUserResponse {
  isDone: boolean;
  statusMessage: string;
  user?: userData;
}

type userData = {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
};

type updateTypes = 'email' | 'password' | 'name' | 'photo';

const updateUserEmail = (newEmail: string) => {
  try {
    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'User has successfully registered',
    };

    return response;
  } catch (error) {
    const response: IUpdateUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};

const updateUserPassword = (newPassword: string) => {
  try {
    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'User has successfully registered',
    };

    return response;
  } catch (error) {
    const response: IUpdateUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};

const updateUserName = (newName: string) => {
  try {
    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'User has successfully registered',
    };

    return response;
  } catch (error) {
    const response: IUpdateUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};

const updateUserPhoto = (newPhoto: string) => {
  try {
    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'User has successfully registered',
    };

    return response;
  } catch (error) {
    const response: IUpdateUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};

export const updateUserService = async ({
  updateType,
  newData,
}: IUpdateUserProps): Promise<IUpdateUserResponse> => {
  const response: IUpdateUserResponse = {
    isDone: false,
    statusMessage: '',
  };

  switch (updateType) {
    case 'email':
      await updateUserEmail(newData);
      break;
    case 'password':
      await updateUserPassword(newData);
      break;
    case 'name':
      await updateUserName(newData);
      break;
    case 'photo':
      await updateUserPhoto(newData);
      break;
    default:
      return response;
  }

  return response;
};
