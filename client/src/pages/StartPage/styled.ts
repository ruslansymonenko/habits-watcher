import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

import { spinAnimation } from '../../styles/animations';
import { appearanceAnimation } from '../../styles/animations';
import { hideAnimation } from '../../styles/animations';

export const StartPageStyled = styled.main<{ $showLogoPage: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.primary};
  overflow: hidden;
  animation: ${({ $showLogoPage }) =>
    !$showLogoPage
      ? css`
          ${hideAnimation} 2s linear;
        `
      : 'none'};

  .start-page__logo-circle {
    height: 600px;
    animation: ${spinAnimation} 8s linear infinite;
  }

  .start-page__logo-text {
    position: absolute;
    height: 550px;
    animation: ${appearanceAnimation} 1s ease;
  }
`;
