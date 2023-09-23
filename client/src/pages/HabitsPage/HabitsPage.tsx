import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import BottomPanel from '../../containers/BottomPanel/BottomPanel';
import HabitsList from '../../containers/HabitsList/HabitsList';

import { HabitsPageStyled, HabitsPageContent } from './styled';
import { Content } from '../../App.styled';

const HabitsPage: React.FC = () => {
  return (
    <HabitsPageStyled>
      <Header />
      <Content className="habits-content">
        <SidePanel />
        <HabitsPageContent>
          <HabitsList />
        </HabitsPageContent>
        <BottomPanel />
      </Content>
    </HabitsPageStyled>
  );
};

export default HabitsPage;
