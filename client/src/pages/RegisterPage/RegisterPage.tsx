import React from 'react';

import AuthForm from '../../containers/AuthForm/AuthForm';

import { RegisterPageStyled, RegisterPageTitle, ReggisterPageImg } from './styled';
import { Container, Content } from '../../App.styled';

import registerImage from '../../assets/images/auth-images/singup-image.png';

const RegisterPage: React.FC = () => {
  return (
    <RegisterPageStyled>
      <Container>
        <Content className="login-content">
          <RegisterPageTitle>Registration</RegisterPageTitle>
          <ReggisterPageImg
            src={registerImage}
            alt="register"
          />
          <AuthForm formType="register" />
        </Content>
      </Container>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
