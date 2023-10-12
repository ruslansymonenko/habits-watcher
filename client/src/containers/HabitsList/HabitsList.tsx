import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';

import { getUserHabits } from '../../store/slices/habitsSlice/habitsSlice';

import HabitsListItem from '../../components/HabitsListItem/HabitsListItem';

import { HabitsListStyled } from './styled';

const HabitsList: React.FC = () => {
  const userHabits = useSelector((state: RootState) => state.habits.userHabits);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHabits());
  }, []);

  return (
    <HabitsListStyled>
      {userHabits ? (
        userHabits.map(habit => (
          <HabitsListItem
            key={habit.id}
            title={habit.title}
            color={habit.color}
            createdDate={habit.created_date}
          />
        ))
      ) : (
        <div>No habits to display</div>
      )}
    </HabitsListStyled>
  );
};

export default HabitsList;
