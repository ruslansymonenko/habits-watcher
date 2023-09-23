import styled from 'styled-components';

import { BOTTOM_PANEL_HEIGHT } from '../../styles/consts';

export const HabitsPageStyled = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HabitsPageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 790px) {
    height: calc(100% - ${BOTTOM_PANEL_HEIGHT}px);
  }
`;
