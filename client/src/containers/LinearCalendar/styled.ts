import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const LinearCalendarStyled = styled.div`
  height: 70px;
  width: 80%;
  padding: ${indents.indent_2}px;
  box-shadow: 1px 1px 15px -10px black;
  border-radius: 10px;
  margin-top: ${indents.indent_6}px;
`;

export const LinearCalendarDays = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;
