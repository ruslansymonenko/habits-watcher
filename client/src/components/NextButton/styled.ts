import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const NextButtonStyled = styled.button<{ $color: string; $top?: number; $right?: number }>`
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}%` : '0%')};
  right: ${({ $right }) => ($right ? `${$right}%` : '0%')};
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
`;
