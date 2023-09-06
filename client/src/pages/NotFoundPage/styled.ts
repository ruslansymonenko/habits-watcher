import styled from 'styled-components';

import { colors, indents, fontSizes } from '../../styles/variables';

export const NotFoundPageStyled = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: ${colors.primary};

  .notfound-contnet {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

// export const NotFoundPageContent = styled.div`
//   flex-grow: 1;
//   height: 100%;
//   min-width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
// `;

export const NotFoundPageTextContainer = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 20px;
  padding: ${indents.indent_4}px;
  background-color: ${colors.lightBackground};
  margin-top: ${indents.indent_6}px;
  box-shadow: 1px 1px 24px -12px black;
  margin-bottom: ${indents.indent_6}px;
`;

export const NotFoundPageText = styled.h1`
  font-size: ${fontSizes.fontHuge}px;
  text-align: center;
  width: 100%;

  @media (max-width: 720px) {
    font-size: ${fontSizes.fontMedium}px;
  }
`;

export const NotFoundPageImage = styled.img`
  height: 200px;
  display: inline;

  @media (max-width: 700px) {
    height: 150px;
  }
`;
