import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../App.styled';
import InfoSlider from '../../containers/InfoSlider/InfoSlider';
import RoundButton from '../../components/RoundButton/RoundButton';

import { PresentationPageStyled } from './styled';

const PresentationPage: React.FC = () => {
  const navigate = useNavigate();

  const goToNextPage = (): void => {
    navigate('/isAccount');
  };

  return (
    <PresentationPageStyled>
      <Container>
        <InfoSlider />
      </Container>
      <RoundButton
        text="Next"
        action={goToNextPage}
        $color="accent"
        $right={5}
        $top={85}
        $position="absolute"
      />
    </PresentationPageStyled>
  );
};

export default PresentationPage;
