import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import { AuthFormStyled, AuthFormLabel, AuthFormInput, AuthFormBtns } from './styled';
import { Container, Content } from '../../App.styled';
import { Interface } from 'readline';

type AuthFormType = 'login' | 'register';

interface AuthFormProps {
  formType: AuthFormType;
}

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    //Later here should be form validation and login or registration of the User, and the redirecting to the Home Page
    if (formType === 'login') {
      navigate('/home');
    } else if (formType === 'register') {
      navigate('/home');
    }
  };

  return (
    <AuthFormStyled>
      <Container>
        <Content className="auth-content">
          <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
          <AuthFormInput id="email" />
          <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
          <AuthFormInput
            id="password"
            type="password"
          />
          <AuthFormBtns>
            <Button
              $type="accent"
              text="Submit"
              action={handleSubmit}
            />
            <Button
              $type="accent"
              text="Cancel"
            />
          </AuthFormBtns>
        </Content>
      </Container>
    </AuthFormStyled>
  );
};

export default AuthForm;
