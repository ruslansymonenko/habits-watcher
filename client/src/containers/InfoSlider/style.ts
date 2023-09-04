import styled from 'styled-components';

import { colors, indents } from '../../styles/variables';

export const InfoSliderStyled = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const InfoSliderContainer = styled.div<{ $translation: number }>`
  height: 90%;
  width: 100%;
  display: flex;
  transition: 0.4s ease;
  transform: ${({ $translation }) => `translateX(${$translation}%)`};
`;

export const InfoSliderDots = styled.div`
  display: flex;
  margin-top: ${indents.indent_3}px;
`;

export const InfoSliderDot = styled.div<{ $isActive: boolean }>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: ${indents.indent_2}px;
  background-color: ${({ $isActive }) => ($isActive ? `${colors.accent}` : `${colors.inActive}`)};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`;
