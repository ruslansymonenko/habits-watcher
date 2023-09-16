import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import BottomPanel from '../../containers/BottomPanel/BottomPanel';
import LineearCalendar from '../../containers/LinearCalendar/LineearCalendar';
import DayProgress from '../../containers/DayProgress/DayProgress';
import { DayHabits } from '../../containers/DayHabits/DayHabits';
import RoundButton from '../../components/RoundButton/RoundButton';

import { HomePageStyled, HomePageContent } from './styled';
import { Content } from '../../App.styled';

const HomePage: React.FC = () => {
  const handleNewHabit = () => {
    console.log('new');
  };

  return (
    <HomePageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
        <HomePageContent>
          <LineearCalendar />
          <DayProgress />
          <DayHabits />
        </HomePageContent>
        <BottomPanel />
        <RoundButton
          text="New"
          action={handleNewHabit}
          $color="accent"
          $top={85}
          $right={3}
          $position="fixed"
        />
      </Content>
    </HomePageStyled>
  );
};

export default HomePage;
