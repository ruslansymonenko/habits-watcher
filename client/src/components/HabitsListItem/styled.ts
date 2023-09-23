import styled from 'styled-components';

import { indents } from '../../styles/variables';

export const HabitsListItemStyled = styled.li<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${indents.indent_2}px;
  width: 100%;
  height: 50px;
  padding: ${indents.indent_1}px;
  box-shadow: 1px 1px 7px -3px black;
  border-radius: 4px;
  background-color: ${({ $color }) => ($color ? `${$color}` : '#FFFFFF')};
`;

export const HabitsListItemTitle = styled.span`
  display: block;
`;

export const HabitsListItemBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HabitsListItemBtn = styled.button`
  height: 30px;
  width: 30px;
  margin: 5px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 6px -4px black;
  cursor: pointer;
`;
