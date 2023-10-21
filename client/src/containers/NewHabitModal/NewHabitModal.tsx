import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import DatePicker from 'react-datepicker';

import { closeNewHabitModal } from '../../store/slices/modalStatusSlice/modalStatusSlice';

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
  NewHabitDaysContainer,
  NewHabitDay,
  NewHabitDayText,
  NewHabitModalCloseBtn,
} from './styled';

import 'react-datepicker/dist/react-datepicker.css';

import closeImg from '../../assets/icons/action-icons/close.svg';

interface INewHabitModalProps {
  isActive: boolean;
}

const NewHabitModal: React.FC<INewHabitModalProps> = ({ isActive }) => {
  const dispatch: AppDispatch = useDispatch();

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
  const weekDays = [1, 2, 3, 4, 5, 6, 7];
  const [startDate, setStartDate] = useState<Date | null>(null);

  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedColor, setSelectedColor] = useState('#55efc4');
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedStartDate, setSelectedStartDate] = useState('');

  const formatDate = (date: Date | null): string => {
    if (date === null) {
      return '';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
  };

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTitle(e.target.value);
  };

  const handleSetCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCondition(e.target.value);
  };

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleSelectedDays = (day: number) => {
    let updatedSelectedDays;
    if (selectedDays.includes(day)) {
      updatedSelectedDays = selectedDays.filter(selectedDay => selectedDay !== day);
    } else {
      updatedSelectedDays = [...selectedDays, day];
    }

    updatedSelectedDays.sort((a, b) => a - b);

    setSelectedDays(updatedSelectedDays);
  };

  const handleSlectedStartDate = (date: Date | null) => {
    const formattedDate = formatDate(date);
    setSelectedStartDate(formattedDate);
  };

  const handleCancel = () => {
    setSelectedColor('#55efc4');
    setSelectedTitle('');
    setSelectedCondition('');
    setSelectedDays([]);
    setStartDate(null);
  };

  const closeModal = () => {
    dispatch(closeNewHabitModal());
  };

  useEffect(() => {
    handleSlectedStartDate(startDate);
  }, [startDate]);

  return (
    <NewHabitModalStyled $isActive={isActive}>
      <NewHabitModalContnent>
        <NewHabitModalTitle>Add New Habit</NewHabitModalTitle>
        <NewHabitInputContainer>
          <NewHabitInputName>Habit title</NewHabitInputName>
          <NewHabitInput
            type="text"
            placeholder="write habit title"
            value={selectedTitle}
            onChange={handleSetTitle}
          />
        </NewHabitInputContainer>
        <NewHabitInputContainer>
          <NewHabitInputName>Habit condition</NewHabitInputName>
          <NewHabitInput
            type="text"
            placeholder="write condition for completing"
            value={selectedCondition}
            onChange={handleSetCondition}
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
        <NewHabitInputContainer>
          <NewHabitInputName>Habit days</NewHabitInputName>
          <NewHabitDaysContainer>
            {weekDays.map((day, index) => (
              <NewHabitDay
                key={index}
                $isAcive={selectedDays.includes(day)}
                onClick={() => handleSelectedDays(day)}
              >
                <NewHabitDayText>{day}</NewHabitDayText>
              </NewHabitDay>
            ))}
          </NewHabitDaysContainer>
        </NewHabitInputContainer>
        <NewHabitInputContainer>
          <NewHabitInputName>Chose start day</NewHabitInputName>
          <DatePicker
            className="newhabit-datepicker"
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
          />
        </NewHabitInputContainer>
        <NewHabitModalBtns>
          <Button
            $type="primary"
            text="Add"
          />
          <Button
            $type="accent"
            text="Cancel"
            handleClick={handleCancel}
          />
        </NewHabitModalBtns>
        <NewHabitModalCloseBtn onClick={closeModal}>
          <img
            src={closeImg}
            alt="close modal"
          />
        </NewHabitModalCloseBtn>
      </NewHabitModalContnent>
    </NewHabitModalStyled>
  );
};

export default NewHabitModal;
