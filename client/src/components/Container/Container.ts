import styled from 'styled-components';

import { indents } from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  padding: ${indents.indent_2}px ${indents.indent_2}px;

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
