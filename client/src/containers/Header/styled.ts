import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../styles/consts';
import { colors, indents, fontSizes } from '../../styles/variables';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  /* margin-bottom: ${indents.indent_1}px; */
  padding: ${indents.indent_1}px;
  box-shadow: -1px 1px 12px -7px black;
`;

export const HeaderAppPresentation = styled.div`
  display: flex;
  width: 170px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderAppName = styled.h1`
  font-family: 'Caveat', cursive;
  font-size: ${fontSizes.fontLarge}px;
  font-weight: 600;
  color: ${colors.primary};
`;

export const HeaderAppImage = styled.img`
  height: 40px;
`;
