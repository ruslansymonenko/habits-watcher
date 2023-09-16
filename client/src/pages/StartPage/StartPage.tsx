import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../../store/slices/userSlices/authSlice';

import { StartPageStyled } from './styled';

import appLogoText from '../../assets/images/logo-images/hw-logo-text.png';
import appLogoCircle from '../../assets/images/logo-images/hw-logo-circle.png';

const StartPage: React.FC = () => {
  const isAuth: boolean = useSelector(checkIsAuth);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [showLogoPage, setShowLogoPage] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    setTimeout(() => {
      setShowLogoPage(false);
    }, 2000);

    setTimeout(() => {
      setIsAuthChecked(true);
    }, 4000);
  };

  useEffect(() => {
    handleRedirect();
    if (isAuthChecked && !isAuth) {
      navigate('/presentation');
    }
  }, [isAuthChecked, isAuth]);

  return (
    <StartPageStyled $showLogoPage={showLogoPage}>
      <img
        className="start-page__logo-circle"
        src={appLogoCircle}
        alt="app-logo-circle"
      />
      <img
        className="start-page__logo-text"
        src={appLogoText}
        alt="app-logo-text"
      />
    </StartPageStyled>
  );
};

export default StartPage;
