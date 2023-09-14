import React from 'react';

import { ButtonStyled } from './styled';

type buttonTypes = 'primary' | 'accent' | 'inActive';

// type actionProps = string | number | MouseEvent<HTMLButtonElement>;

type buttonProps = {
  text?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  // actionProps?: actionProps;
  $type: buttonTypes;
  children?: React.ReactNode;
};

const Button: React.FC<buttonProps> = ({ text, handleClick, children, $type }) => {
  const buttonAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick !== undefined) {
      handleClick(event);
    }
  };

  return (
    <ButtonStyled
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => buttonAction(e)}
      $type={$type}
    >
      {children ? children : text}
    </ButtonStyled>
  );
};

export default Button;
