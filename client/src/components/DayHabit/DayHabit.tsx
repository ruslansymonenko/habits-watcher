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

interface IDayHabit {
  name: string;
  habitCondition: string;
  bgColor: string;
  image: string;
  isDone: boolean;
}

const DayHabit: React.FC<IDayHabit> = ({ name, habitCondition, bgColor, image, isDone }) => {
  return (
    <DayHabitStyled
      $color={bgColor}
      $isDone={isDone}
    >
      <DayHabitImgContainer>
        <DayHabitImg src={image} />
      </DayHabitImgContainer>
      <DayHabitInfo>
        <DayHabitName $isDone={isDone}>{name}</DayHabitName>
        <DayHabitCondition>{habitCondition}</DayHabitCondition>
      </DayHabitInfo>
      <DyaHabitStatus>
        <DyaHabitStatusImg src={isDone ? checkImageActive : checkImageInActive} />
      </DyaHabitStatus>
    </DayHabitStyled>
  );
};

export default DayHabit;
