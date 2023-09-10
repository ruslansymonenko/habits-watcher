import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import BottomPanel from '../../containers/BottomPanel/BottomPanel';

import { ProfilePageStyled } from './styled';
import { Content } from '../../App.styled';

const ProfilePage: React.FC = () => {
  return (
    <ProfilePageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
        <BottomPanel />
      </Content>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
