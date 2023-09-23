import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';

import { generateYearArray, Day } from '../../helpers/generateYearArray';
import { getCurrentTime } from '../../helpers/getCurrentTime';
import { setCurrentDay, setDayHabits } from '../../store/slices/dataSlices/mainDataSlice';

import { IMainDataDay } from '../../types/serverTypes';

import DayItem from '../../components/DayItem/DayItem';

import { LinearCalendarStyled, LinearCalendarDays, LinearCalendarBtn } from './styled';

import arrowPrev from '../../assets/icons/arrow-back.svg';
import arrowNext from '../../assets/icons/arrow-forward.svg';

type DisplayedDaysFrame = [number, number];
type changeDayFrame = 'prev' | 'next';

const LineearCalendar: React.FC = () => {
  const mainData = useSelector((state: RootState) => state.mainData.mainData);
  const currentDay = useSelector((state: RootState) => state.mainData.currentDay);
  const currentYear = useSelector((state: RootState) => state.mainData.currentYear);
  const currentDayHabits = useSelector((state: RootState) => state.mainData.currentDayHabits);

  const [daysOfYear, setDaysOfYear] = useState<IMainDataDay[]>([]);
  const [displayedDaysFrame, setDisplayedDaysFrame] = useState<DisplayedDaysFrame>([0, 0]);
  const [displayedDays, setDisplayedDays] = useState<Day[]>([]);
  const [selectedDay, setSelectedDay] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const createStartWeekFrame = (): void => {
    const currentDate: string = getCurrentTime('date');
    const today: number = daysOfYear.findIndex(day => day.date === currentDate);
    const startFrame: number = today - 3;
    const endFrame: number = today + 3;

    setDisplayedDaysFrame([startFrame, endFrame]);
  };

  const changeDayFrame = (direction: changeDayFrame): void => {
    if (direction === 'prev') {
      setDisplayedDaysFrame([displayedDaysFrame[0] - 1, displayedDaysFrame[1] - 1]);
    } else if (direction === 'next') {
      setDisplayedDaysFrame([displayedDaysFrame[0] + 1, displayedDaysFrame[1] + 1]);
    }
  };

  const changeSelectedDay = (day: string): void => {
    setSelectedDay(day);
    dispatch(setCurrentDay({ day: day }));
  };

  const handleDisplayedDays = () => {
    const startDisplayedDay = displayedDaysFrame[0];
    const endDisplayedDay = displayedDaysFrame[1];

    setDisplayedDays(daysOfYear.slice(startDisplayedDay - 1, endDisplayedDay));
  };

  useEffect(() => {
    if (daysOfYear.length > 0) {
      createStartWeekFrame();
    }
  }, [daysOfYear]);

  useEffect(() => {
    handleDisplayedDays();
  }, [displayedDaysFrame]);

  useEffect(() => {
    const day = getCurrentTime('date');
    setSelectedDay(day);
    dispatch(setCurrentDay({ day: day }));
  }, []);

  useEffect(() => {
    handleDisplayedDays();
  }, [selectedDay]);

  useEffect(() => {
    if (mainData) {
      const dataForCurrentYear = mainData['2023'];
      setDaysOfYear(dataForCurrentYear);
    }
  }, [mainData]);

  useEffect(() => {
    if (mainData && currentYear) {
      const curentYearData = mainData[currentYear];
      if (currentDay) {
        const foundedDay = curentYearData.find(day => day.date === currentDay);
        if (foundedDay?.habits) {
          dispatch(setDayHabits(foundedDay.habits));
        }
      }
    }
  }, [mainData, currentDay, currentYear]);

  return (
    <LinearCalendarStyled>
      <LinearCalendarDays>
        {displayedDays.map(day => (
          <DayItem
            key={day.date}
            date={day.date}
            day={day.dayOfTheWeek}
            selectedDay={selectedDay}
            changeSelectedDay={changeSelectedDay}
          />
        ))}
      </LinearCalendarDays>
      <LinearCalendarBtn
        className="linear-calendar__btn_prev"
        onClick={() => changeDayFrame('prev')}
      >
        <img
          src={arrowPrev}
          alt="previous day"
        />
      </LinearCalendarBtn>
      <LinearCalendarBtn
        className="linear-calendar__btn_next"
        onClick={() => changeDayFrame('next')}
      >
        <img
          src={arrowNext}
          alt="next day"
        />
      </LinearCalendarBtn>
    </LinearCalendarStyled>
  );
};

export default LineearCalendar;
