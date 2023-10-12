import React, { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';

import { colors } from '../../styles/variables';

import {
  NewHabitModalStyled,
  NewHabitModalContnent,
  NewHabitModalTitle,
  NewHabitModalBtns,
  NewHabitInputContainer,
  NewHabitInputName,
  NewHabitInput,
  NewHabitColorContainer,
  NewHabitColor,
} from './styled';

const NewHabitModal: React.FC = () => {
  const habitsColors: string[] = [
    colors.habit_1,
    colors.habit_2,
    colors.habit_3,
    colors.habit_4,
    colors.habit_5,
    colors.habit_6,
    colors.habit_7,
    colors.habit_8,
    colors.habit_9,
    colors.habit_10,
  ];
  const [selectedColor, setSelectedColor] = useState('#55efc4');

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    console.log(selectedColor);
  }, [selectedColor]);

  return (
    <NewHabitModalStyled>
      <NewHabitModalContnent>
        <NewHabitModalTitle>Add New Habit</NewHabitModalTitle>
        <NewHabitInputContainer>
          <NewHabitInputName>Habit title</NewHabitInputName>
          <NewHabitInput
            type="text"
            placeholder="write habit title"
          />
        </NewHabitInputContainer>
        <NewHabitInputContainer>
          <NewHabitInputName>Habit condition</NewHabitInputName>
          <NewHabitInput
            type="text"
            placeholder="write condition for completing"
          />
        </NewHabitInputContainer>
        <NewHabitInputContainer>
          <NewHabitInputName>Habit background color</NewHabitInputName>
          <NewHabitColor $bgColor={selectedColor} />
          <NewHabitColorContainer>
            {habitsColors.map((color, index) => (
              <NewHabitColor
                key={index}
                $bgColor={color}
                onClick={() => handleSelectedColor(color)}
              />
            ))}
          </NewHabitColorContainer>
        </NewHabitInputContainer>
        <NewHabitModalBtns>
          <Button
            $type="primary"
            text="Add"
          />
          <Button
            $type="accent"
            text="Cancel"
          />
        </NewHabitModalBtns>
      </NewHabitModalContnent>
    </NewHabitModalStyled>
  );
};

export default NewHabitModal;
