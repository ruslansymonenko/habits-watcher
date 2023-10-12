import styled from 'styled-components';

import { Z_INDEX_LEVEL_3 } from '../../styles/consts';
import { indents } from '../../styles/variables';

export const NewHabitModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  transition: 0.5s ease;
  z-index: ${Z_INDEX_LEVEL_3};
`;

export const NewHabitModalContnent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  min-height: 300px;
  min-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const NewHabitModalTitle = styled.h3``;

export const NewHabitInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewHabitInputName = styled.label`
  margin-bottom: ${indents.indent_2}px;
`;

export const NewHabitInput = styled.input`
  border: none;
  box-shadow: 0px 0px 12px -6px black;
  border-radius: 5px;
  padding: 5px;
  min-width: 250px;

  &:focus {
    outline: none;
  }
`;

export const NewHabitColorContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const NewHabitColor = styled.div<{ $bgColor: string }>`
  height: 30px;
  width: 30px;
  margin: 2px;
  box-shadow: 0px 0px 5px -3px black;
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor};
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const NewHabitModalBtns = styled.div``;
