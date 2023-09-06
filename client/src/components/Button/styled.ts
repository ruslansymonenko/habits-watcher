import styled from 'styled-components';

import { colors, indents } from '../../styles/variables';

export const ButtonStyled = styled.button<{ $type: string }>`
  height: 35px;
  min-width: 100px;
  padding: ${indents.indent_1}px;
  margin: ${indents.indent_1}px;
  border: none;
  color: ${colors.lightText};
  border-radius: 10px;
  box-shadow: 1px 1px 16px -10px black;
  background-color: ${({ $type }) => colors[$type]};
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    transform: scale(1.01);
    background-color: ${colors.lightBackground};
    color: ${colors.primaryText};
  }
`;
