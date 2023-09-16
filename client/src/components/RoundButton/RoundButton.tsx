import React from 'react';

import { RoundButtonStyled } from './styled';

type NextButton = {
  text: string;
  action: () => void;
  $color: 'inactive' | 'accent' | 'primary';
  $top?: number;
  $right?: number;
  $position: 'absolute' | 'fixed';
};

const RoundButton = ({ text, action, $color, $top, $right, $position }: NextButton) => {
  return (
    <RoundButtonStyled
      onClick={action}
      $color={$color}
      $top={$top}
      $right={$right}
      $position={$position}
    >
      {text}
    </RoundButtonStyled>
  );
};

export default RoundButton;
