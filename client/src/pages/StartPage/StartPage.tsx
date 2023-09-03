import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { StartPageStyled } from './styled';

import appLogoText from '../../assets/images/logo-images/hw-logo-text.png';
import appLogoCircle from '../../assets/images/logo-images/hw-logo-circle.png';

const StartPage: React.FC = () => {
  const [showLogoPage, setShowLogoPage] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    setTimeout(() => {
      setShowLogoPage(false);
    }, 2000);

    setTimeout(() => {
      return navigate('/presentation');
    }, 4000);
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <StartPageStyled $showLogoPage={showLogoPage}>
      <img className="start-page__logo-circle" src={appLogoCircle} alt="app-logo-circle" />
      <img className="start-page__logo-text" src={appLogoText} alt="app-logo-text" />
    </StartPageStyled>
  );
};

export default StartPage;
