import React, { useState, useEffect } from 'react';

import { generateYearArray, Day } from '../../helpers/generateYearArray';
import { getCurrentTime } from '../../helpers/getCurrentTime';

import DayItem from '../../components/DayItem/DayItem';

import { LinearCalendarStyled, LinearCalendarDays } from './styled';

const LineearCalendar: React.FC = () => {
  const [daysOfYear, setDaysOfYear] = useState<Day[]>([]);
  const [week, setWeek] = useState<Day[]>([]);

  const createWeek = () => {
    const currentDate = getCurrentTime('date');
    const today = daysOfYear.findIndex(day => day.date === currentDate);

    const getWeek = [
      daysOfYear[today - 3],
      daysOfYear[today - 2],
      daysOfYear[today - 1],
      daysOfYear[today],
      daysOfYear[today + 1],
      daysOfYear[today + 2],
      daysOfYear[today + 3],
    ];
    setWeek(getWeek);
  };

  useEffect(() => {
    setDaysOfYear(generateYearArray());
  }, []);

  useEffect(() => {
    if (daysOfYear.length > 0) {
      createWeek();
    }
  }, [daysOfYear]);

  return (
    <LinearCalendarStyled>
      <LinearCalendarDays>
        {week.map(day => (
          <DayItem
            key={day.date}
            date={day.date}
            day={day.dayOfTheWeek}
          />
        ))}
      </LinearCalendarDays>
    </LinearCalendarStyled>
  );
};

export default LineearCalendar;
