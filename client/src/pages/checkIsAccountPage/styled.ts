import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const CheckIsAccountPageStyled = styled.div`
  height: 100vh;
  overflow: hidden;

  .isaccount-contnet {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CheckIsAccountPageTitle = styled.h1`
  margin-bottom: ${indents.indent_6}px;
  font-size: ${fontSizes.fontHuge}px;
  font-weight: 600;
  text-align: center;
  color: ${colors.primaryText};
`;

export const CheckIsAccountPageImage = styled.img`
  max-height: 400px;
  margin-bottom: ${indents.indent_6}px;
`;

export const CheckIsAccountPageSubTitle = styled.h2`
  font-size: ${fontSizes.fontLarge}px;
  font-weight: 400;
  color: ${colors.primaryText};
  margin-bottom: ${indents.indent_6}px;
`;

export const CheckIsAccountPageBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
`;
