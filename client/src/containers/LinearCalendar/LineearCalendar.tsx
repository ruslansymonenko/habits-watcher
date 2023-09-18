import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { generateYearArray, Day } from '../../helpers/generateYearArray';
import { getCurrentTime } from '../../helpers/getCurrentTime';

import { IMainDataDay } from '../../types/serverTypes';

import DayItem from '../../components/DayItem/DayItem';

import { LinearCalendarStyled, LinearCalendarDays, LinearCalendarBtn } from './styled';

import arrowPrev from '../../assets/icons/arrow-back.svg';
import arrowNext from '../../assets/icons/arrow-forward.svg';

type DisplayedDaysFrame = [number, number];
type changeDayFrame = 'prev' | 'next';

const LineearCalendar: React.FC = () => {
  const mainData = useSelector((state: RootState) => state.mainData.mainData);
  // const [daysOfYear, setDaysOfYear] = useState<Day[]>([]);
  const [daysOfYear, setDaysOfYear] = useState<IMainDataDay[]>([]);
  const [displayedDaysFrame, setDisplayedDaysFrame] = useState<DisplayedDaysFrame>([0, 0]);
  const [displayedDays, setDisplayedDays] = useState<Day[]>([]);
  const [selectedDay, setSelectedDay] = useState('');

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
  };

  const handleDisplayedDays = () => {
    const startDisplayedDay = displayedDaysFrame[0];
    const endDisplayedDay = displayedDaysFrame[1];

    setDisplayedDays(daysOfYear.slice(startDisplayedDay - 1, endDisplayedDay));
  };

  // useEffect(() => {
  //   setDaysOfYear(generateYearArray());
  // }, []);

  useEffect(() => {
    if (daysOfYear.length > 0) {
      createStartWeekFrame();
    }
  }, [daysOfYear]);

  useEffect(() => {
    handleDisplayedDays();
  }, [displayedDaysFrame]);

  useEffect(() => {
    setSelectedDay(getCurrentTime('date'));
  }, []);

  useEffect(() => {
    handleDisplayedDays();
  }, [selectedDay]);

  useEffect(() => {
    console.log(mainData);
    if (mainData) {
      const dataForCurrentYear = mainData['2023'];
      setDaysOfYear(dataForCurrentYear);
    }
  }, [mainData]);

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
