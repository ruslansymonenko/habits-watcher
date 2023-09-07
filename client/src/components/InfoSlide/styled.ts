import styled from 'styled-components';

import { fontSizes, colors, indents } from '../../styles/variables';

export const InfoSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  min-width: 100%;
  margin-bottom: ${indents.indent_3}px;
`;

export const InfoSlideImg = styled.img`
  width: 400px;

  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const InfoSlideTitle = styled.h1`
  font-size: ${fontSizes.fontHuge}px;
  font-weight: 600;
  text-align: center;
  color: ${colors.primaryText};
  margin-bottom: ${indents.indent_3}px;

  @media (max-width: 915px) {
    font-size: ${fontSizes.fontLarge}px;
  }

  @media (max-width: 450px) {
    font-size: ${fontSizes.fontMedium}px;
  }
`;

export const InfoSlideText = styled.p`
  font-size: ${fontSizes.fontLarge}px;
  font-weight: 400;
  text-align: center;
  color: ${colors.primaryText};
  max-width: 800px;
  margin-bottom: ${indents.indent_3}px;

  @media (max-width: 915px) {
    font-size: ${fontSizes.fontMedium}px;
  }

  @media (max-width: 450px) {
    font-size: ${fontSizes.fontPrimary}px;
  }
`;
