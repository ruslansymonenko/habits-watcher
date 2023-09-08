import styled from 'styled-components';

import { colors, indents } from '../../styles/variables';

export const DayItemStyled = styled.li<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  width: 10%;
  background-color: ${({ $isActive }) =>
    $isActive ? `${colors.primary}` : `${colors.lightBackground}`};
  border-radius: 15px;
  padding: ${indents.indent_1}px;
  box-shadow: 1px 1px 15px -10px black;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DayItemDate = styled.div<{ $isActive: boolean }>`
  font-weight: 600;
`;

export const DayItemDay = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? `${colors.lightText}` : `${colors.accent}`)};
  font-weight: 600;
`;
