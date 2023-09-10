import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';
import { Z_INDEX_LEVEL_5, BOTTOM_PANEL_HEIGHT } from '../../styles/consts';

export const BottomPanelStyled = styled.nav`
  display: none;

  @media (max-width: 790px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: ${BOTTOM_PANEL_HEIGHT}px;
    padding: ${indents.indent_1}px;
    background-color: ${colors.mediumBackground};
    z-index: ${Z_INDEX_LEVEL_5};
  }
`;

export const BottomPanelNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
`;

export const BottomPanelNavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
  cursor: pointer;

  & a {
    height: 90%;
    width: 90%;
  }
`;

export const BottomPanelNavImg = styled.img`
  height: 100%;
  width: 100%;
`;
