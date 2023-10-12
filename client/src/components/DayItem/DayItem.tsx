import React from 'react';

import { DayItemStyled, DayItemDate, DayItemDay } from './styled';

type DayItemProps = {
  date: string;
  day: string;
  selectedDay: string;
  changeSelectedDay: (day: string) => void;
};

const DayItem: React.FC<DayItemProps> = ({ date, day, selectedDay, changeSelectedDay }) => {
  const formatedDate = date.split('/')[0];
  const isActive = date === selectedDay;

  return (
    <DayItemStyled
      onClick={() => changeSelectedDay(date)}
      $isActive={isActive}
    >
      <DayItemDate $isActive={isActive}>{formatedDate}</DayItemDate>
      <DayItemDay $isActive={isActive}>{day}</DayItemDay>
    </DayItemStyled>
  );
};

export default DayItem;
