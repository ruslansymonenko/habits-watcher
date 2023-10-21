import styled from 'styled-components';

import { Z_INDEX_LEVEL_3 } from '../../styles/consts';
import { indents, colors } from '../../styles/variables';

export const NewHabitModalStyled = styled.div<{ $isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isActive }) => ($isActive ? `1` : `0`)};
  visibility: ${({ $isActive }) => ($isActive ? `visible` : `hidden`)};
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
  margin: 5px;

  .newhabit-datepicker {
    border: none;
    box-shadow: 0px 0px 5px -2px black;
    padding: 4px;
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }
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
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor};
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const NewHabitDaysContainer = styled.div`
  display: flex;
  margin: 5px 0px;
`;

export const NewHabitDay = styled.div<{ $isAcive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin: 2px;
  box-shadow: 0px 0px 5px -3px black;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ $isAcive }) =>
    $isAcive ? `${colors.primary}` : `${colors.mediumBackground}`};
  transition: 0.3s;
`;

export const NewHabitModalCloseBtn = styled.button`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 2%;
  right: 2%;
  background-color: transparent;
  box-shadow: 0px 0px 5px -3px black;
  border-radius: 3px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const NewHabitDayText = styled.span`
  font-weight: 600;
`;

export const NewHabitModalBtns = styled.div``;
