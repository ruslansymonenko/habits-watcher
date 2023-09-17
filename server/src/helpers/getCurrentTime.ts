type timeType = 'time' | 'date' | 'full' | 'year';

export const getCurrentTime = (type: timeType): string => {
  const now: Date = new Date();
  let result: string = '';

  const getTime = (): string => {
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const getDate = (): string => {
    const year = String(now.getFullYear());
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  const getYear = (): string => {
    const year = String(now.getFullYear());
    return year;
  };

  if (type === 'time') {
    const currentTime: string = getTime();
    result = currentTime;
  }

  if (type === 'date') {
    const currentDate: string = getDate();
    result = currentDate;
  }

  if (type === 'full') {
    const currentTime: string = getTime();
    const currentDate: string = getDate();

    result = `${currentTime} ${currentDate}`;
  }

  if (type === 'year') {
    const year = getYear();
    result = year;
  }

  return result;
};
