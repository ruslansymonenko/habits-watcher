import { useState, useEffect } from 'react';
import { getCurrentTime } from '../../helpers/getCurrentTime';

import {
  HeaderStyled,
  HeaderAppPresentation,
  HeaderAppName,
  HeaderAppImage,
  HeaderTimeContainer,
  HeaderClock,
  HeaderDate,
  HeaderUser,
  HeaderUserName,
  HeaderUserPhotoContainer,
  HeaderUserPhoto,
} from './styled';
import { Container, Content } from '../../App.styled';

import appLogoImage from '../../assets/icons/hw-logo.ico';
import userImg from '../../assets/icons/user.svg';

const Header: React.FC = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const clock = () => {
    setTimeout(() => {
      setTime(getCurrentTime('time'));
    }, 1000);
  };

  useEffect(() => {
    setDate(getCurrentTime('date'));
    setTime(getCurrentTime('time'));
  }, []);

  clock();

  return (
    <HeaderStyled>
      <Container>
        <Content className="header-content">
          <HeaderAppPresentation>
            <HeaderAppName>Habits Watcher</HeaderAppName>
            <HeaderAppImage
              src={appLogoImage}
              alt="app logo"
            />
          </HeaderAppPresentation>
          <HeaderTimeContainer>
            <HeaderClock>{time}</HeaderClock>
            <HeaderDate>{date}</HeaderDate>
          </HeaderTimeContainer>
          <HeaderUser>
            <HeaderUserName>User Name</HeaderUserName>
            <HeaderUserPhotoContainer>
              <HeaderUserPhoto
                src={userImg}
                alt="user"
              />
            </HeaderUserPhotoContainer>
          </HeaderUser>
        </Content>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
