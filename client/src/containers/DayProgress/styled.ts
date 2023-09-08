import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const DayProgressStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100px;
  width: 80%;
  box-shadow: 1px 1px 18px -15px black;
  border-radius: 10px;
  background-color: ${colors.mediumBackground};
  padding: ${indents.indent_3}px;

  .day-progress__habits {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
  }

  .day-progress__circle {
    width: 30%;
  }
`;

export const DayProgressSection = styled.div`
  height: 100%;
`;

export const DayProgressHabit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DayProgressHabitColor = styled.div<{ $color: string }>`
  min-height: 10px;
  min-width: 10px;
  border-radius: 50%;
  background-color: ${({ $color }) => `${colors[$color]}`};
  margin-right: ${indents.indent_1}px;
`;

export const DayProgressHabitName = styled.span`
  display: block;
  font-weight: 600;
  text-align: center;
`;
