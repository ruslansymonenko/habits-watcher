import React from 'react';

import { convertDate } from '../../helpers/convertDate';

import {
  HabitsListItemStyled,
  HabitsListItemTitle,
  HabitsListItemDate,
  HabitsListItemBtns,
  HabitsListItemBtn,
} from './styled';

import deleteImg from '../../assets/icons/action-icons/trash.svg';
import updateImg from '../../assets/icons/action-icons/pencil.svg';

interface IHabitsLitsProps {
  title: string;
  color: string;
  createdDate: string;
}

const HabitsListItem: React.FC<IHabitsLitsProps> = ({ title, color, createdDate }) => {
  const formatedDate = convertDate(createdDate);

  return (
    <HabitsListItemStyled $color={color}>
      <HabitsListItemTitle>{title}</HabitsListItemTitle>
      <HabitsListItemDate>Created: {formatedDate}</HabitsListItemDate>
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
