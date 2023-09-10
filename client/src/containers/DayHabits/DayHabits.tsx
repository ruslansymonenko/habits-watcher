import React from 'react';

import { testHabits } from '../../helpers/dataForTests';
import testImage from '../../assets/icons/test-image.svg';

import DayHabit from '../../components/DayHabit/DayHabit';

import { DayHabitsStyled } from './styled';

export const DayHabits: React.FC = () => {
  return (
    <DayHabitsStyled>
      {testHabits.map((habit, index) => (
        <DayHabit
          key={index}
          name={habit.name}
          habitCondition={habit.habitCondition}
          bgColor={habit.color}
          isDone={habit.isDone}
          image={testImage}
        />
      ))}
    </DayHabitsStyled>
  );
};
