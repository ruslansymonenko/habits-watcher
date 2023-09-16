import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../../store';

import { registerUser, loginUser } from '../../store/slices/userSlices/authSlice';
import {
  emailValidation,
  passwordValidation,
  IValidationResult,
} from '../../helpers/dataValidation';

import Button from '../../components/Button/Button';

import { AuthFormStyled, AuthFormLabel, AuthFormInput, AuthFormBtns } from './styled';
import { Container, Content } from '../../App.styled';

type AuthFormType = 'login' | 'register';
type AuthStatus = string | null;

interface AuthFormProps {
  formType: AuthFormType;
}

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const authStatus: AuthStatus = useSelector((state: RootState) => state.auth.status);
  const authIsRequestDone: boolean = useSelector((state: RootState) => state.auth.isRequestDone);
  const dispatch: AppDispatch = useDispatch();

  const validateForm = (email: string, password: string): boolean => {
    const checkEmail: IValidationResult = emailValidation(email);
    const checkPassword: IValidationResult = passwordValidation(password);

    if (checkEmail.validationResult && checkPassword.validationResult) {
      return true;
    } else if (!checkEmail.validationResult || !checkPassword.validationResult) {
      if (!checkEmail.validationResult) {
        toast.error(checkEmail.resultMessages);
      } else if (!checkPassword.validationResult) {
        toast.error(checkPassword.resultMessages);
      }
      return false;
    } else {
      toast.error('Please, put correct data');
      return false;
    }
  };

  const handleSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (formType === 'login') {
      let validation = validateForm(emailInputValue, passwordInputValue);

      if (validation) {
        dispatch(
          loginUser({
            email: emailInputValue,
            password: passwordInputValue,
          }),
        );
        clearForm();
      }
    } else if (formType === 'register') {
      let validation = validateForm(emailInputValue, passwordInputValue);

      if (validation) {
        dispatch(registerUser({ email: emailInputValue, password: passwordInputValue }));
        clearForm();
      }
    }
  };

  const clearForm = (): void => {
    setEmailInputValue('');
    setPasswordInputValue('');
  };

  const handleCancel = (event: React.MouseEvent): void => {
    event.preventDefault();
    clearForm();
  };

  useEffect(() => {
    if (authStatus) {
      if (authIsRequestDone) {
        toast.success(authStatus);
      } else {
        toast.error(authStatus);
      }
    }
  }, [authStatus]);

  return (
    <AuthFormStyled>
      <Container>
        <Content className="auth-content">
          <AuthFormLabel htmlFor="email">Email</AuthFormLabel>
          <AuthFormInput
            id="email"
            value={emailInputValue}
            onChange={e => setEmailInputValue(e.target.value)}
          />
          <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
          <AuthFormInput
            id="password"
            type="password"
            value={passwordInputValue}
            onChange={e => setPasswordInputValue(e.target.value)}
          />
          <AuthFormBtns>
            <Button
              $type="accent"
              text="Submit"
              handleClick={handleSubmit}
            />
            <Button
              $type="accent"
              text="Cancel"
              handleClick={handleCancel}
            />
          </AuthFormBtns>
        </Content>
      </Container>
    </AuthFormStyled>
  );
};

export default AuthForm;
