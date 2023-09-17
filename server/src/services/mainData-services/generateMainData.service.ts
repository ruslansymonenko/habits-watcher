import { generateYearArray } from '../../helpers/generateYearArray';
import { IMainDataResponse, IMainDataHabit, IMainDataDay } from '../../types/mainDataTypes';

export const generateMainData = (): IMainDataResponse => {
  const year = generateYearArray();
  const yearWithData = [];

  for (const day of year) {
    const habit: IMainDataHabit = {
      name: 'sport',
      icon: '',
      condition: '1h',
      color: '#55efc4',
      status: false,
    };

    const dayData: IMainDataDay = {
      data: day.date,
      dayOfTheWeek: day.dayOfTheWeek,
      dayOfWeekNumber: day.dayOfWeekNumber,
      habits: [habit],
    };

    yearWithData.push(dayData);
  }

  const data: IMainDataResponse = {
    data: {
      '2023': yearWithData,
    },
  };

  return data;
};
