import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { data, testHabits } from '../../helpers/dataForTests';

import {
  DayProgressStyled,
  DayProgressSection,
  DayProgressHabit,
  DayProgressHabitColor,
  DayProgressHabitName,
} from './styled';

const DayProgress: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

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
      <DayProgressSection className="day-progress__circle">
        <Doughnut data={data} />
      </DayProgressSection>
    </DayProgressStyled>
  );
};

export default DayProgress;
