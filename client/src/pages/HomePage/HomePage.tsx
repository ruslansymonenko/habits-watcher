import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import LineearCalendar from '../../containers/LinearCalendar/LineearCalendar';

import { HomePageStyled, HomePageContent } from './styled';
import { Content } from '../../App.styled';

const HomePage: React.FC = () => {
  return (
    <HomePageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
        <HomePageContent>
          <LineearCalendar />
        </HomePageContent>
      </Content>
    </HomePageStyled>
  );
};

export default HomePage;
