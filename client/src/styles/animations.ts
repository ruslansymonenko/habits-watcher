import { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const appearanceAnimation = keyframes`
  from {
    transform: scale(0.05);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const hideAnimation = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
