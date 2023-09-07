import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';

import { ProfilePageStyled } from './styled';
import { Content } from '../../App.styled';

const ProfilePage = () => {
  return (
    <ProfilePageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
      </Content>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
