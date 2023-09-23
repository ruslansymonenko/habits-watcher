import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { testHabits } from '../../helpers/dataForTests';
import testImage from '../../assets/icons/test-image.svg';

import DayHabit from '../../components/DayHabit/DayHabit';

import { DayHabitsStyled } from './styled';

export const DayHabits: React.FC = () => {
  const dayHabits = useSelector((state: RootState) => state.mainData.currentDayHabits);

  return (
    <DayHabitsStyled>
      {dayHabits ? (
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
