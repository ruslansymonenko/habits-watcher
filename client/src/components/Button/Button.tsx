import React from 'react';

import { ButtonStyled } from './styled';

type buttonTypes = 'primary' | 'accent' | 'inActive';

type buttonProps = {
  text?: string;
  action?: () => void;
  $type: buttonTypes;
  children?: React.ReactNode;
};

const Button: React.FC<buttonProps> = ({ text, action, children, $type }) => {
  return (
    <ButtonStyled
      onClick={action}
      $type={$type}
    >
      {children ? children : text}
    </ButtonStyled>
  );
};

export default Button;
