import React from 'react';

import { LoaderStyled } from './styled';

import appLogoCircle from '../../assets/images/logo-images/hw-logo-circle.png';

const Loader: React.FC = () => {
  return (
    <LoaderStyled>
      <img
        className="start-page__logo-circle"
        src={appLogoCircle}
        alt="app-logo-circle"
      />
    </LoaderStyled>
  );
};

export default Loader;
