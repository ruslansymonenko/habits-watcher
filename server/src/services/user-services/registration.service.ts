import database from '../../database/database';

interface IRegistrationProps {
  email: string;
  password: string;
}

interface IRegistrationResponse {
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

export const registrationService = async ({
  email,
  password,
}: IRegistrationProps): Promise<IRegistrationResponse> => {
  try {
    const newUser = await database.query(
      `INSERT INTO users (email, password) values ($1, $2) RETURNING *`,
      [email, password],
    );

    const userData: userData = newUser.rows[0];

    const response: IRegistrationResponse = {
      isDone: true,
      statusMessage: 'User has successfully registered',
      user: userData,
    };

    console.log(email, password);
    return response;
  } catch (error) {
    const response: IRegistrationResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };

    return response;
  }
};
