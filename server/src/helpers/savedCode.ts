// for (const day of year) {
//   for (const habit of dataFromDB) {
//     if (habit.habit_day_start) {
//       const habitStartDate = formatDbDate(habit.habit_day_start);
//       let dayStartIndex = null;

//       if (day.date === habitStartDate) {
//         const habitDaysOfWeek = habit.week_days;
//         dayStartIndex = year.indexOf(day);

//         if (year.indexOf(day) >= dayStartIndex) {
//           console.log(habitDaysOfWeek);
//           console.log(day.dayOfWeekNumber);
//           if (habitDaysOfWeek.includes(day.dayOfWeekNumber)) {
//             console.log('yes');
//             const dayData: IMainDataDay = {
//               data: day.date,
//               dayOfTheWeek: day.dayOfTheWeek,
//               dayOfWeekNumber: day.dayOfWeekNumber,
//               habits: [habit],
//             };
//             yearWithData.push(dayData);
//           } else {
//             const dayData: IMainDataDay = {
//               data: day.date,
//               dayOfTheWeek: day.dayOfTheWeek,
//               dayOfWeekNumber: day.dayOfWeekNumber,
//               habits: null,
//             };
//             yearWithData.push(dayData);
//           }
//         }
//       } else {
//         const dayData: IMainDataDay = {
//           data: day.date,
//           dayOfTheWeek: day.dayOfTheWeek,
//           dayOfWeekNumber: day.dayOfWeekNumber,
//           habits: null,
//         };
//         yearWithData.push(dayData);
//       }
//     } else {
//       const dayData: IMainDataDay = {
//         data: day.date,
//         dayOfTheWeek: day.dayOfTheWeek,
//         dayOfWeekNumber: day.dayOfWeekNumber,
//         habits: null,
//       };

//       yearWithData.push(dayData);
//     }
//   }
// }
