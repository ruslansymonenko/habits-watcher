import React from 'react';

import Header from '../../containers/Header/Header';
import SidePanel from '../../containers/SidePanel/SidePanel';
import BottomPanel from '../../containers/BottomPanel/BottomPanel';

import { SettingsPageStyled } from './styled';
import { Content } from '../../App.styled';

const SettingsPage: React.FC = () => {
  return (
    <SettingsPageStyled>
      <Header />
      <Content className="layout-contnet">
        <SidePanel />
        <BottomPanel />
      </Content>
    </SettingsPageStyled>
  );
};

export default SettingsPage;
