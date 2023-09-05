import styled from 'styled-components';

import { colors } from '../../styles/variables';
import { spinAnimation } from '../../styles/animations';

export const LoaderStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightBackground};
  overflow: hidden;

  .start-page__logo-circle {
    height: 50vh;
    max-height: 600px;
    animation: ${spinAnimation} 8s linear infinite;
  }

  @media (max-width: 768px) {
    .start-page__logo-circle {
      height: 30vh;
    }
  }
`;
