import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNewHabitModal } from '../../store/slices/modalStatusSlice/modalStatusSlice';
import { AppDispatch, RootState } from '../../store';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import BottomPanel from '../../containers/BottomPanel/BottomPanel';
import LineearCalendar from '../../containers/LinearCalendar/LineearCalendar';
import DayProgress from '../../containers/DayProgress/DayProgress';
import { DayHabits } from '../../containers/DayHabits/DayHabits';
import NewHabitModal from '../../containers/NewHabitModal/NewHabitModal';
import RoundButton from '../../components/RoundButton/RoundButton';

import { HomePageStyled, HomePageContent } from './styled';
import { Content } from '../../App.styled';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const newHabitModalStatus = useSelector(
    (state: RootState) => state.modalStatus.newHabitModalStatus,
  );

  const handleNewHabit = () => {
    dispatch(openNewHabitModal());
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
      <NewHabitModal isActive={newHabitModalStatus} />
    </HomePageStyled>
  );
};

export default HomePage;
