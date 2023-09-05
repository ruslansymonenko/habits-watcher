import React from 'react';

import {
  NotFoundPageStyled,
  NotFoundPageTextContainer,
  NotFoundPageText,
  NotFoundPageImage,
  NotFoundPageContent,
} from './styled';
import { Container } from '../../components/Container/Container';

import sadEmojiImage from '../../assets/icons/emoji-sad.svg';

const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <Container>
        <NotFoundPageContent>
          <NotFoundPageTextContainer>
            <NotFoundPageText>This page is not found or has not yet been created</NotFoundPageText>
          </NotFoundPageTextContainer>
          <NotFoundPageImage
            src={sadEmojiImage}
            alt="Sad emoji"
          />
        </NotFoundPageContent>
      </Container>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
