import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { logOut } from '../../store/slices/userSlices/authSlice';

import {
  SidePanelStyled,
  SidePanelNavList,
  SidePanelNavListItem,
  SidePanelNavImage,
  SidePanelLogOutBtn,
} from './styled';

import homeImage from '../../assets/icons/navigation-images/home.svg';
import profileImage from '../../assets/icons/navigation-images/account.svg';
import settingsImage from '../../assets/icons/navigation-images/settings.svg';
import logoutImage from '../../assets/icons/logout.svg';

const SidePanel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

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
          <SidePanelLogOutBtn onClick={handleLogOut}>
            <SidePanelNavImage
              src={logoutImage}
              alt="logout"
            />
            <span>Log out</span>
          </SidePanelLogOutBtn>
        </SidePanelNavListItem>
      </SidePanelNavList>
    </SidePanelStyled>
  );
};

export default SidePanel;
