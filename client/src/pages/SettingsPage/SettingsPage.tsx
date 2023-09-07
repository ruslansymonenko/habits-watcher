import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';

import { SettingsPageStyled } from './styled';
import { Content } from '../../App.styled';

const SettingsPage = () => {
  return (
    <SettingsPageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
      </Content>
    </SettingsPageStyled>
  );
};

export default SettingsPage;
