import database from '../../database/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface ILoginProps {
  email: string;
  password: string;
}

interface ILoginResponse {
  isDone: boolean;
  statusMessage: string;
  user?: userData;
  token?: string;
}

type userData = {
  id: number;
  email: string;
  password: string;
  user_name: string | null;
  photo_url: string | null;
  created_date: string;
};

export const loginService = async ({ email, password }: ILoginProps): Promise<ILoginResponse> => {
  try {
    const checkIsUser = await database.query('SELECT * FROM users WHERE email = $1', [email]);

    if (checkIsUser.rows.length > 0) {
      const userData: userData = checkIsUser.rows[0];
      const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';
      const isPasswordCorrect: boolean = await bcrypt.compare(password, userData.password);

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            userId: userData.id,
          },
          JWT_SECRET,
          { expiresIn: '10d' },
        );

        const response: ILoginResponse = {
          isDone: true,
          statusMessage: 'You are logged in',
          user: userData,
          token: token,
        };

        return response;
      } else {
        const response: ILoginResponse = {
          isDone: false,
          statusMessage: 'Wrong password',
        };

        return response;
      }
    } else {
      const response: ILoginResponse = {
        isDone: false,
        statusMessage: 'This user is not registered',
      };

      return response;
    }
  } catch (error) {
    const response: ILoginResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};
