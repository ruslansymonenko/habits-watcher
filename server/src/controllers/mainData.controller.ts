import { Response } from 'express';
import { CustomRequestWithID } from '../types/userType';

import { IMainDataHabit, IMainDataDay, IMainDataResponse } from '../types/mainDataTypes';

import { generateMainData } from '../services/mainData-services/generateMainData.service';
import { loggerService } from '../services/logger.service';

export const getMainData = async (req: CustomRequestWithID, res: Response): Promise<Response> => {
  try {
    const userId = req.userId;
    if (userId) {
      const mainData: IMainDataResponse = await generateMainData(userId);
      if (mainData.isDone) {
        return res.json({
          isDone: true,
          data: mainData.data,
          statusMessage: 'Data received',
        });
      } else {
        loggerService('error', 'Data was not receiving from main data servise');
        return res.json({
          isDone: false,
          data: null,
          statusMessage: 'Main data was not receiving from server',
        });
      }
    } else {
      return res.json({
        isDone: false,
        data: null,
        statusMessage: 'No user id',
      });
    }
  } catch (error) {
    loggerService('error', `${error}`);
    return res.json({
      isDone: false,
      data: null,
      statusMessage: 'Data was not received from server',
    });
  }
};
