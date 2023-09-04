import React from 'react';

import { NextButtonStyled } from './styled';

type NextButton = {
  text: string;
  action: () => void;
  $color: 'inactive' | 'accent' | 'primary';
  $top?: number;
  $right?: number;
};

const NextButton = ({ text, action, $color, $top, $right }: NextButton) => {
  return (
    <NextButtonStyled
      onClick={action}
      $color={$color}
      $top={$top}
      $right={$right}
    >
      {text}
    </NextButtonStyled>
  );
};

export default NextButton;
