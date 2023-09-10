import styled from 'styled-components';

import { colors, fontSizes, indents } from '../../styles/variables';

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
  margin-bottom: ${indents.indent_3}px;

  .day-progress__habits {
    width: 60%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 5px;

    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
      width: 50%;
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .day-progress__circle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 30vh;
    padding: ${indents.indent_1}px;

    @media (max-width: 650px) {
      width: 40%;
    }

    @media (max-width: 500px) {
      width: 50%;
    }

    @media (max-width: 410px) {
      width: 60%;
      height: 40vh;
    }
  }
`;

export const DayProgressSection = styled.div`
  height: 100%;
`;

export const DayProgressHabit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const DayProgressHabitColor = styled.div<{ $color: string }>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${({ $color }) => `${colors[$color]}`};
  margin-right: ${indents.indent_2}px;

  @media (max-width: 400px) {
    height: 10px;
    width: 10px;
  }
`;

export const DayProgressHabitName = styled.span`
  display: block;
  font-weight: 600;
  text-align: center;
  font-size: ${fontSizes.fontMedium}px;

  @media (max-width: 1160px) {
    font-size: ${fontSizes.fontPrimary}px;
  }

  @media (max-width: 400px) {
    font-size: ${fontSizes.fontSmall}px;
  }
`;
