import database from '../../database/database';
import jwt from 'jsonwebtoken';

interface IGetUserProps {
  id: string;
}

export interface IGetUserResponse {
  isDone: boolean;
  statusMessage: string;
  user: userData | null;
  token: string | null;
}

type userData = {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
};

export const getUserService = async ({ id }: IGetUserProps): Promise<IGetUserResponse> => {
  try {
    const checkIsUser = await database.query('SELECT * FROM users WHERE id = $1', [id]);

    if (checkIsUser.rows.length > 0) {
      const userData: userData = checkIsUser.rows[0];
      const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';

      const token = jwt.sign(
        {
          userId: userData.id,
        },
        JWT_SECRET,
        { expiresIn: '10d' },
      );

      const response: IGetUserResponse = {
        isDone: true,
        statusMessage: 'User received',
        user: userData,
        token: token,
      };

      return response;
    } else {
      const response: IGetUserResponse = {
        isDone: false,
        statusMessage: 'This user is not registered',
        user: null,
        token: null,
      };

      return response;
    }
  } catch (error) {
    const response: IGetUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
      user: null,
      token: null,
    };

    return response;
  }
};
