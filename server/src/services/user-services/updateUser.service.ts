import database from '../../database/database';

interface IUpdateUserProps {
  updateType: updateTypes;
  userId: string;
  newData: string;
}

export interface IUpdateUserResponse {
  isDone: boolean;
  statusMessage: string;
  user?: userData | null;
}

export type userData = {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
};

export type updateTypes = 'email' | 'password' | 'name' | 'photo';

const updateUserEmail = async (id: string, newEmail: string) => {
  try {
    const user = await database.query(`UPDATE users set email = $1 where id = $2 RETURNING *`, [
      newEmail,
      id,
    ]);

    const userData: userData = user.rows[0];

    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'The email was successfully updated',
      user: userData,
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

const updateUserPassword = async (id: string, newPassword: string) => {
  try {
    const user = await database.query(`UPDATE users set password = $1 where id = $2 RETURNING *`, [
      newPassword,
      id,
    ]);

    const userData: userData = user.rows[0];

    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'The password was successfully updated',
      user: userData,
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

const updateUserName = async (id: string, newName: string) => {
  try {
    const user = await database.query(`UPDATE users set user_name = $1 where id = $2 RETURNING *`, [
      newName,
      id,
    ]);

    const userData: userData = user.rows[0];

    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'The name was successfully updated',
      user: userData,
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

const updateUserPhoto = async (id: string, newPhoto: string) => {
  try {
    const user = await database.query(`UPDATE users set photo_url = $1 where id = $2 RETURNING *`, [
      newPhoto,
      id,
    ]);

    const userData: userData = user.rows[0];

    const response: IUpdateUserResponse = {
      isDone: true,
      statusMessage: 'The photo was successfully updated',
      user: userData,
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
  userId,
  newData,
}: IUpdateUserProps): Promise<IUpdateUserResponse> => {
  let response: IUpdateUserResponse = {
    isDone: false,
    statusMessage: '',
  };

  switch (updateType) {
    case 'email':
      response = await updateUserEmail(userId, newData);
      break;
    case 'password':
      response = await updateUserPassword(userId, newData);
      break;
    case 'name':
      response = await updateUserName(userId, newData);
      break;
    case 'photo':
      response = await updateUserPhoto(userId, newData);
      break;
    default:
      response = {
        isDone: false,
        statusMessage: 'something going wrong',
      };
  }

  return response;
};
