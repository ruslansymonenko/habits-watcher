import React from 'react';

import AuthForm from '../../containers/AuthForm/AuthForm';

import { LoginPageStyled, LoginPageTitle, LoginPageImg } from './styled';
import { Container, Content } from '../../App.styled';

import loginImage from '../../assets/images/auth-images/login-image.png';

const LoginPage: React.FC = () => {
  return (
    <LoginPageStyled>
      <Container>
        <Content className="login-content">
          <LoginPageTitle>Login</LoginPageTitle>
          <LoginPageImg
            src={loginImage}
            alt="login"
          />
          <AuthForm formType="login" />
        </Content>
      </Container>
    </LoginPageStyled>
  );
};

export default LoginPage;
