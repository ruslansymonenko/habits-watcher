import React from 'react';

import {
  DayHabitStyled,
  DayHabitImgContainer,
  DayHabitImg,
  DayHabitInfo,
  DayHabitName,
  DayHabitCondition,
  DyaHabitStatus,
  DyaHabitStatusImg,
} from './styled';

import checkImageInActive from '../../assets/icons/check-inActive.svg';
import checkImageActive from '../../assets/icons/check-active.svg';

import { IMainDataHabit } from '../../types/serverTypes';

const DayHabit: React.FC<IMainDataHabit> = ({ title, habit_condition, color, habit_icon }) => {
  const IsDone = false;

  return (
    <DayHabitStyled
      $color={color}
      $isDone={IsDone}
    >
      <DayHabitImgContainer>
        <DayHabitImg src={habit_icon} />
      </DayHabitImgContainer>
      <DayHabitInfo>
        <DayHabitName $isDone={false}>{title}</DayHabitName>
        <DayHabitCondition>{habit_condition}</DayHabitCondition>
      </DayHabitInfo>
      <DyaHabitStatus>
        <DyaHabitStatusImg src={IsDone ? checkImageActive : checkImageInActive} />
      </DyaHabitStatus>
    </DayHabitStyled>
  );
};

export default DayHabit;
