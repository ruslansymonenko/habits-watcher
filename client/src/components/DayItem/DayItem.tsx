import React, { useState, useEffect } from 'react';

import { DayItemStyled, DayItemDate, DayItemDay } from './styled';

type DayItemProps = {
  date: string;
  day: string;
};

const DayItem: React.FC<DayItemProps> = ({ date, day }) => {
  const formatedDate = date.split('/')[0];

  return (
    <DayItemStyled>
      <DayItemDate>{formatedDate}</DayItemDate>
      <DayItemDay>{day}</DayItemDay>
    </DayItemStyled>
  );
};

export default DayItem;
