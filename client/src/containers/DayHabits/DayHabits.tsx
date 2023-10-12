import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import DayHabit from '../../components/DayHabit/DayHabit';

import { DayHabitsStyled } from './styled';

export const DayHabits: React.FC = () => {
  const dayHabits = useSelector((state: RootState) => state.mainData.currentDayHabits);
  const isMainDataLoading = useSelector((state: RootState) => state.mainData.isLoading);

  return (
    <DayHabitsStyled>
      {isMainDataLoading ? (
        <div>loading...</div>
      ) : dayHabits ? (
        dayHabits.map((habit, index) => (
          <DayHabit
            key={index}
            {...habit}
          />
        ))
      ) : (
        <div>No habits for today</div>
      )}
    </DayHabitsStyled>
  );
};
