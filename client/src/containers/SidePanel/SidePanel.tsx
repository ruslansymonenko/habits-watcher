import React from 'react';
import { Link } from 'react-router-dom';

import {
  SidePanelStyled,
  SidePanelNavList,
  SidePanelNavListItem,
  SidePanelNavImage,
} from './styled';

import homeImage from '../../assets/icons/home.svg';
import profileImage from '../../assets/icons/account.svg';
import settingsImage from '../../assets/icons/settings.svg';
import logoutImage from '../../assets/icons/logout.svg';

const SidePanel: React.FC = () => {
  return (
    <SidePanelStyled>
      <SidePanelNavList>
        <SidePanelNavListItem>
          <SidePanelNavImage
            src={homeImage}
            alt="home"
          />
          <Link to="/home">Home</Link>
        </SidePanelNavListItem>
        <SidePanelNavListItem>
          <SidePanelNavImage
            src={profileImage}
            alt="profile"
          />
          <Link to="/profile">Profile</Link>
        </SidePanelNavListItem>
        <SidePanelNavListItem>
          <SidePanelNavImage
            src={settingsImage}
            alt="settings"
          />
          <Link to="/settings">Settings</Link>
        </SidePanelNavListItem>
      </SidePanelNavList>
      <SidePanelNavList>
        <SidePanelNavListItem>
          <SidePanelNavImage
            src={logoutImage}
            alt="logout"
          />
          <Link to="/">Logout</Link>
        </SidePanelNavListItem>
      </SidePanelNavList>
    </SidePanelStyled>
  );
};

export default SidePanel;
