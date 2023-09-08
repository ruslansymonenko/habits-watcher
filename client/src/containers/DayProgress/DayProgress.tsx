import React from 'react';

import {
  DayProgressStyled,
  DayProgressSection,
  DayProgressHabit,
  DayProgressHabitColor,
  DayProgressHabitName,
} from './styled';

const DayProgress: React.FC = () => {
  const testHabits = [
    {
      name: 'habit',
      color: 'habit_1',
    },
    {
      name: 'habit 2',
      color: 'habit_2',
    },
    {
      name: 'habit 3',
      color: 'habit_3',
    },
  ];

  return (
    <DayProgressStyled>
      <DayProgressSection className="day-progress__habits">
        {testHabits.map((habit, index) => (
          <DayProgressHabit key={index}>
            <DayProgressHabitColor $color={habit.color} />
            <DayProgressHabitName>{habit.name}</DayProgressHabitName>
          </DayProgressHabit>
        ))}
      </DayProgressSection>
      <DayProgressSection className="day-progress__circle"></DayProgressSection>
    </DayProgressStyled>
  );
};

export default DayProgress;
