import React from 'react';

import {
  HabitsListItemStyled,
  HabitsListItemTitle,
  HabitsListItemBtns,
  HabitsListItemBtn,
} from './styled';

import deleteImg from '../../assets/icons/action-icons/trash.svg';
import updateImg from '../../assets/icons/action-icons/pencil.svg';

interface IHabitsLitsProps {
  title: string;
  color: string;
}

const HabitsListItem: React.FC<IHabitsLitsProps> = ({ title, color }) => {
  return (
    <HabitsListItemStyled $color={color}>
      <HabitsListItemTitle>{title}</HabitsListItemTitle>
      <HabitsListItemBtns>
        <HabitsListItemBtn>
          <img
            src={updateImg}
            alt="update"
          />
        </HabitsListItemBtn>
        <HabitsListItemBtn>
          <img
            src={deleteImg}
            alt="delete"
          />
        </HabitsListItemBtn>
      </HabitsListItemBtns>
    </HabitsListItemStyled>
  );
};

export default HabitsListItem;
