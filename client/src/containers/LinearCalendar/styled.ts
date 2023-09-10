import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const LinearCalendarStyled = styled.div`
  position: relative;
  height: 70px;
  width: 80%;
  padding: ${indents.indent_3}px;
  margin-top: ${indents.indent_6}px;
  margin-bottom: ${indents.indent_6}px;

  .linear-calendar__btn_prev {
    top: 50%;
    transform: translateY(-50%);
    left: -4%;

    & img {
      transform: translateX(3px);
    }
  }

  .linear-calendar__btn_next {
    top: 50%;
    transform: translateY(-50%);
    right: -4%;
  }
`;

export const LinearCalendarDays = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
`;

export const LinearCalendarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${colors.accent};
  box-shadow: 1px 1px 15px -10px black;
  cursor: pointer;

  & img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 790px) {
    height: 25px;
    width: 25px;
  }
`;
