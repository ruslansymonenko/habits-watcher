import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../styles/consts';
import { colors, indents, fontSizes } from '../../styles/variables';

import { appearanceDownAnimation } from '../../styles/animations';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  padding: ${indents.indent_1}px;
  box-shadow: -1px 1px 12px -7px black;
  animation: ${appearanceDownAnimation} 0.5s ease;

  .header-content {
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderAppPresentation = styled.div`
  display: flex;
  width: 170px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 790px) {
    width: 120px;
  }

  @media (max-width: 574px) {
    width: 45px;
  }
`;

export const HeaderAppName = styled.h1`
  font-family: 'Caveat', cursive;
  font-size: ${fontSizes.fontLarge}px;
  font-weight: 600;
  color: ${colors.primary};

  @media (max-width: 790px) {
    font-size: ${fontSizes.fontMedium}px;
  }

  @media (max-width: 574px) {
    display: none;
  }
`;

export const HeaderAppImage = styled.img`
  height: 40px;
`;

export const HeaderTimeContainer = styled.div`
  display: flex;
  width: 160px;
  height: 20px;
  padding: ${indents.indent_2}px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 1px 1px 14px -7px black;
  background-color: ${colors.darkPrimary};

  @media (max-width: 790px) {
    width: 120px;
  }

  @media (max-width: 574px) {
    display: none;
  }
`;

export const HeaderDate = styled.span`
  font-weight: 400;
  color: ${colors.lightText};
  font-size: ${fontSizes.fontPrimary}px;

  @media (max-width: 790px) {
    font-size: ${fontSizes.fontSmall}px;
  }
`;

export const HeaderClock = styled.span`
  margin-right: ${indents.indent_4}px;
  font-weight: 400;
  color: ${colors.lightText};
  font-size: ${fontSizes.fontPrimary}px;

  @media (max-width: 790px) {
    font-size: ${fontSizes.fontSmall}px;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  width: 160px;
  padding: ${indents.indent_2}px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 790px) {
    width: 120px;
  }
`;

export const HeaderUserName = styled.h2`
  font-weight: 600;
  color: ${colors.primaryText};
  font-size: ${fontSizes.fontPrimary}px;

  @media (max-width: 790px) {
    font-size: ${fontSizes.fontSmall}px;
  }
`;

export const HeaderUserPhotoContainer = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  box-shadow: 1px 1px 17px -9px black;
  overflow: hidden;

  @media (max-width: 790px) {
    height: 35px;
    width: 35px;
  }
`;

export const HeaderUserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
