import { Request, Response } from 'express';

import { IMainDataHabit, IMainDataDay, IMainDataResponse } from '../types/mainDataTypes';

import { generateMainData } from '../services/mainData-services/generateMainData.service';

export const getMainData = (req: Request, res: Response): Response => {
  const mainData: IMainDataResponse = generateMainData();
  console.log('main data');
  return res.json({
    data: mainData.data,
  });
};
