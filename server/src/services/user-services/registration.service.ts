import database from '../../database/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IRegistrationProps {
  email: string;
  password: string;
}

interface IRegistrationResponse {
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

export const registrationService = async ({
  email,
  password,
}: IRegistrationProps): Promise<IRegistrationResponse> => {
  try {
    const checkIsUser = await database.query('SELECT * FROM users WHERE email = $1', [email]);

    if (checkIsUser.rows.length > 0) {
      const response: IRegistrationResponse = {
        isDone: false,
        statusMessage: 'This user is already registered',
      };

      return response;
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';

      const newUser = await database.query(
        `INSERT INTO users (email, password) values ($1, $2) RETURNING *`,
        [email, hashPassword],
      );

      const userData: userData = newUser.rows[0];

      const token = jwt.sign(
        {
          userId: userData.id,
        },
        JWT_SECRET,
        { expiresIn: '10d' },
      );

      const response: IRegistrationResponse = {
        isDone: true,
        statusMessage: 'User has successfully registered',
        user: userData,
        token: token,
      };

      return response;
    }
  } catch (error) {
    const response: IRegistrationResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};
