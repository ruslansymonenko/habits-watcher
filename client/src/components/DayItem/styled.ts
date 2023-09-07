import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const DayItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  width: 40px;
  border-radius: 15px;
  padding: ${indents.indent_1}px;
  box-shadow: 1px 1px 15px -10px black;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DayItemDate = styled.div``;

export const DayItemDay = styled.div``;
