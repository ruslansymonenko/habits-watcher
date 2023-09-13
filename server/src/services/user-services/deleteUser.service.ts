import database from '../../database/database';

interface IDeleteProps {
  id: string;
}

interface IDeleteUserResponse {
  isDone: boolean;
  statusMessage: string;
}

export const deleteUserService = async ({ id }: IDeleteProps): Promise<IDeleteUserResponse> => {
  try {
    await database.query(`DELETE FROM users where id = $1`, [id]);

    const response: IDeleteUserResponse = {
      isDone: true,
      statusMessage: 'User has successfully deleted',
    };
    return response;
  } catch (error) {
    const response: IDeleteUserResponse = {
      isDone: false,
      statusMessage: 'Some error, please, try later',
    };
    return response;
  }
};
