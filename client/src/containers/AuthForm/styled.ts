import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const AuthFormStyled = styled.div`
  min-height: 300px;
  width: 100%;

  .auth-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AuthFormLabel = styled.label`
  margin-bottom: ${indents.indent_3}px;
  color: ${colors.lightText};
  font-weight: 600;
  font-size: ${fontSizes.fontMedium}px;
`;

export const AuthFormInput = styled.input`
  border: none;
  height: 25px;
  width: 280px;
  font-size: ${fontSizes.fontMedium};
  font-weight: 600;
  padding: ${indents.indent_1}px;
  border-radius: 10px;
  box-shadow: 1px 1px 15px -8px black;
  margin-bottom: ${indents.indent_4}px;

  &:focus {
    outline: none;
  }
`;

export const AuthFormBtns = styled.div``;
