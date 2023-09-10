import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const DayHabitsStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  min-height: 100px;
  width: 80%;
  height: 200px;
  padding: ${indents.indent_3}px;
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;
