import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const RegisterPageStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};

  .login-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RegisterPageTitle = styled.h1`
  margin-bottom: ${indents.indent_6}px;
  font-size: ${fontSizes.fontHuge}px;
  color: ${colors.lightText};
  text-align: center;
  font-weight: 600;
  text-align: center;
`;

export const ReggisterPageImg = styled.img`
  max-width: 60%;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
