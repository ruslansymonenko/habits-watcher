import styled from 'styled-components';

import { BOTTOM_PANEL_HEIGHT } from '../../styles/consts';

export const HomePageStyled = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HomePageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 790px) {
    height: calc(100% - ${BOTTOM_PANEL_HEIGHT}px);
  }
`;
