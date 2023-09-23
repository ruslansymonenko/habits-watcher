import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const DayHabitStyled = styled.div<{ $color: string; $isDone: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 19px -12px black;
  border-radius: 10px;
  padding: ${indents.indent_1}px;
  background-color: ${({ $color, $isDone }) => ($isDone ? `${colors.inActive}` : `${$color}`)};
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const DayHabitImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DayHabitImg = styled.img`
  max-height: 90%;
  object-fit: cover;
`;

export const DayHabitInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayHabitName = styled.span<{ $isDone: boolean }>`
  text-decoration: ${({ $isDone }) => ($isDone ? 'line-through ' : 'none')};

  @media (max-width: 750px) {
    font-size: ${fontSizes.fontSmall}px;
    font-weight: 600;
  }
`;

export const DayHabitCondition = styled.span`
  font-weight: 300;
  @media (max-width: 900px) {
    font-size: ${fontSizes.fontSmall}px;
    font-weight: 400;
  }
`;

export const DyaHabitStatus = styled.div`
  box-shadow: 1px 1px 20px -10px black;
  border-radius: 10px;
  padding: ${indents.indent_1}px;
`;

export const DyaHabitStatusImg = styled.img``;
