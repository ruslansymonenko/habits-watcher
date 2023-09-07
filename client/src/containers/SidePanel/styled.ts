import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';
import { HEADER_HEIGHT } from '../../styles/consts';

export const SidePanelStyled = styled.nav`
  position: relative;
  width: 20%;
  height: 100%;
  color: ${colors.lightText};
  padding: 0px ${indents.indent_2}px;
  background-color: ${colors.primary};
`;

export const SidePanelNavList = styled.ul``;
