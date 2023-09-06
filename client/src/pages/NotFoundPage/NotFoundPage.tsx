import React from 'react';

import {
  NotFoundPageStyled,
  NotFoundPageTextContainer,
  NotFoundPageText,
  NotFoundPageImage,
} from './styled';
import { Container, Content } from '../../App.styled';

import sadEmojiImage from '../../assets/icons/emoji-sad.svg';

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageStyled>
      <Container>
        <Content className="notfound-contnet">
          <NotFoundPageTextContainer>
            <NotFoundPageText>This page is not found or has not yet been created</NotFoundPageText>
          </NotFoundPageTextContainer>
          <NotFoundPageImage
            src={sadEmojiImage}
            alt="Sad emoji"
          />
        </Content>
      </Container>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
