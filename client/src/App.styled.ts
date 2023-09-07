import styled, { createGlobalStyle } from 'styled-components';

import { colors, indents } from './styles/variables';

import { CONTAINER_PADDING } from './styles/consts';

export const AppStyles = createGlobalStyle`
  //Removing basic css styles
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  **::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  ul[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  }
`;

export const Container = styled.div`
  max-width: calc(1200px - ${CONTAINER_PADDING * 2}px);
  width: 100%;
  margin: 0 auto;
  padding: ${CONTAINER_PADDING}px;

  @media (max-width: 1240px) {
    width: 900px;
  }

  @media (max-width: 940px) {
    width: 750px;
  }

  @media (max-width: 790px) {
    width: 550px;
  }

  @media (max-width: 590px) {
    width: 410px;
  }

  @media (max-width: 450px) {
    width: 270px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  min-width: 100%;
  display: flex;
`;
