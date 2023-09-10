import React, { useState, useEffect } from 'react';
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
  const [doughnutData, setDoughnutData] = useState({
    labels: ['Progress', 'Day'],
    datasets: [
      {
        label: 'Day progress',
        data: [0, 0],
        backgroundColor: ['#00bcd4', '#ffffff'],
        hoverOffset: 4,
      },
    ],
  });
  const [progress, setProgress] = useState(0);

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: 65,
  };

  const calculateProgress = (): void => {
    const amountOfHabits = testHabits.length;
    const completedHabits = testHabits.filter(habit => habit.isDone === true).length;

    const currentProgress = Math.round((completedHabits / amountOfHabits) * 100);

    setProgress(currentProgress);
  };

  const setDoughnutProgress = (progress: number): void => {
    const dayValue = 100;
    const progressPercent = (progress / dayValue) * 100;

    const updatedDoughnutData = {
      labels: ['Progress', 'Day'],
      datasets: [
        {
          label: 'Day progress',
          data: [progressPercent, dayValue - progressPercent],
          backgroundColor: ['#00bcd4', '#ffffff'],
          hoverOffset: 4,
        },
      ],
    };

    setDoughnutData(updatedDoughnutData);
  };

  useEffect(() => {
    setDoughnutProgress(progress);
  }, [progress]);

  useEffect(() => {
    calculateProgress();
  }, []);

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
        <Doughnut
          data={doughnutData}
          options={doughnutOptions}
        />
      </DayProgressSection>
    </DayProgressStyled>
  );
};

export default DayProgress;
