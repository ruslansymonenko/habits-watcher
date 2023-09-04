import styled from 'styled-components';

import { fontSizes, colors } from '../../styles/variables';

export const InfoSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  min-width: 100%;
`;

export const InfoSlideImageContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 100%;
  }
`;

export const InfoSlideImg = styled.img`
  width: 300px;
  /* max-height: 70%;
  height: 350px;
  min-height: 200px; */
`;

export const InfoSlideTitle = styled.h1`
  font-size: ${fontSizes.fontHuge}px;
  font-weight: 600;
  color: ${colors.primaryText};
`;

export const InfoSlideText = styled.p`
  font-size: ${fontSizes.fontLarge}px;
  font-weight: 400;
  color: ${colors.primaryText};
`;
