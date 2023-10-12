export const convertDate = (dateToConvert: string): string => {
  const date = new Date(dateToConvert);

  const year = date.getFullYear() % 100; // Get the last two digits of the year
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const convertedDate = `${day}/${month}/${year}`;

  return convertedDate;
};
