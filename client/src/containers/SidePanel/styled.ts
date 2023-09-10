import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

import { appearanceRightAnimation } from '../../styles/animations';

export const SidePanelStyled = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  color: ${colors.lightText};
  padding: 0px ${indents.indent_2}px;
  background-color: ${colors.darkBackground};
  animation: ${appearanceRightAnimation} 0.5s ease;

  @media (max-width: 790px) {
    display: none;
  }
`;

export const SidePanelNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

export const SidePanelNavListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  font-size: ${fontSizes.fontLarge}px;
  margin-bottom: ${indents.indent_4}px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 950px) {
    font-size: ${fontSizes.fontMedium}px;
  }
`;

export const SidePanelNavImage = styled.img`
  height: 22px;
  margin-right: ${indents.indent_3}px;
`;
