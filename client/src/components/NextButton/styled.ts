import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const NextButtonStyled = styled.button<{ $color: string; $top?: number; $right?: number }>`
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}%` : '10%')};
  right: ${({ $right }) => ($right ? `${$right}%` : '10%')};
  background-color: ${({ $color }) => colors[$color]};
  border: none;
  font-weight: 600;
  min-height: 70px;
  min-width: 70px;
  border-radius: 50%;
  padding: 5px;
  color: ${colors.lightText};
  box-shadow: 1px 1px 12px -4px black;
  cursor: pointer;

  @media (max-width: 450px) {
    min-height: 50px;
    min-width: 50px;
  }
`;
