import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/Container/Container';
import InfoSlider from '../../containers/InfoSlider/InfoSlider';
import NextButton from '../../components/NextButton/NextButton';

import { PresentationPageStyled } from './styled';

const PresentationPage = () => {
  const navigate = useNavigate();

  const goToNextPage = (): void => {
    navigate('/isAccount');
  };

  return (
    <PresentationPageStyled>
      <Container>
        <InfoSlider />
      </Container>
      <NextButton
        text="Next"
        action={goToNextPage}
        $color="accent"
        $right={5}
        $top={85}
      />
    </PresentationPageStyled>
  );
};

export default PresentationPage;
