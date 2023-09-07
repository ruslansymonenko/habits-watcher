import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';

import { HomePageStyled } from './styled';
import { Content } from '../../App.styled';

const HomePage: React.FC = () => {
  return (
    <HomePageStyled>
      <Header />
      <Content className="home-contnet">
        <SidePanel />
      </Content>
    </HomePageStyled>
  );
};

export default HomePage;
