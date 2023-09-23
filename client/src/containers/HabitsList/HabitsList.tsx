import React from 'react';

import HabitsListItem from '../../components/HabitsListItem/HabitsListItem';

import { HabitsListStyled } from './styled';

const HabitsList: React.FC = () => {
  return (
    <HabitsListStyled>
      <HabitsListItem
        title="habit"
        color="#81ecec"
      />
    </HabitsListStyled>
  );
};

export default HabitsList;
