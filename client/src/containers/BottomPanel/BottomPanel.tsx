import React from 'react';
import { Link } from 'react-router-dom';

import {
  BottomPanelStyled,
  BottomPanelNavList,
  BottomPanelNavListItem,
  BottomPanelNavImg,
} from './style';

import homeImage from '../../assets/icons/navigation-images/home-dark.svg';
import habitImage from '../../assets/icons/navigation-images/task-dark.svg';
import profileImage from '../../assets/icons/navigation-images/account-dark.svg';
import settingsImage from '../../assets/icons/navigation-images/settings-dark.svg';

const BottomPanel: React.FC = () => {
  return (
    <BottomPanelStyled>
      <BottomPanelNavList>
        <BottomPanelNavListItem>
          <Link to={'/home'}>
            <BottomPanelNavImg src={homeImage} />
          </Link>
        </BottomPanelNavListItem>
        <BottomPanelNavListItem>
          <Link to={'/habits'}>
            <BottomPanelNavImg src={habitImage} />
          </Link>
        </BottomPanelNavListItem>
        <BottomPanelNavListItem>
          <Link to={'/profile'}>
            <BottomPanelNavImg src={profileImage} />
          </Link>
        </BottomPanelNavListItem>
        <BottomPanelNavListItem>
          <Link to={'/settings'}>
            <BottomPanelNavImg src={settingsImage} />
          </Link>
        </BottomPanelNavListItem>
      </BottomPanelNavList>
    </BottomPanelStyled>
  );
};

export default BottomPanel;
