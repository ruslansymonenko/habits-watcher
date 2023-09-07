import { getCurrentTime } from './getCurrentTime';

export interface Day {
  date: string;
  dayOfTheWeek: string;
}

export const generateYearArray = (): Day[] => {
  const days: Day[] = [];
  const currentYear = parseInt(getCurrentTime('year'));

  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const daysInYear: number = isLeapYear(currentYear) ? 366 : 365;
  const startDate = new Date(`${currentYear}-01-01`);

  for (let dayOfYear = 0; dayOfYear < daysInYear; dayOfYear++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + dayOfYear);

    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' });

    days.push({
      date: currentDate.toLocaleDateString('en-GB'),
      dayOfTheWeek: dayOfWeek,
    });
  }

  return days;
};
