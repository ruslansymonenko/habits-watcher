import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import {
  CheckIsAccountPageStyled,
  CheckIsAccountPageTitle,
  CheckIsAccountPageSubTitle,
  CheckIsAccountPageImage,
  CheckIsAccountPageBtns,
} from './styled';
import { Container, Content } from '../../App.styled';

import checkIsAccountImage from '../../assets/images/check-is-account-images/habits.png';

const CheckIsAccountPage: React.FC = () => {
  return (
    <CheckIsAccountPageStyled>
      <Container>
        <Content className="isaccount-contnet">
          <CheckIsAccountPageTitle>Welcome to Habits Watcher</CheckIsAccountPageTitle>
          <CheckIsAccountPageImage
            src={checkIsAccountImage}
            alt="habits"
          />
          <CheckIsAccountPageSubTitle>Do you have account?</CheckIsAccountPageSubTitle>
          <CheckIsAccountPageBtns>
            <Button $type="primary">
              <Link to="/login">Login</Link>
            </Button>
            <Button $type="primary">
              <Link to="/register">Sing up</Link>
            </Button>
          </CheckIsAccountPageBtns>
        </Content>
      </Container>
    </CheckIsAccountPageStyled>
  );
};

export default CheckIsAccountPage;
