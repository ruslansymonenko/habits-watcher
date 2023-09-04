import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

import { appearanceAnimation } from '../../styles/animations';

export const PresentationPageStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.lightBackground};
  overflow: hidden;
  animation: ${appearanceAnimation} 0.7s ease-in-out;
`;
