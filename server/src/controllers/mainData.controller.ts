import { Response } from 'express';
import { CustomRequestWithID } from '../types/userType';

import { IMainDataHabit, IMainDataDay, IMainDataResponse } from '../types/mainDataTypes';

import { generateMainData } from '../services/mainData-services/generateMainData.service';

export const getMainData = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  const userId = req.userId;
  if (userId) {
    const mainData: IMainDataResponse = await generateMainData(userId);
    console.log('main data');
    return res.json({
      data: mainData.data,
    });
  } else {
    return res.json({
      message: 'No user id',
    });
  }
};
