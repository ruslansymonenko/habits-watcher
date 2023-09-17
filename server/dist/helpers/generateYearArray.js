"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateYearArray = void 0;
const getCurrentTime_1 = require("./getCurrentTime");
const generateYearArray = () => {
    const days = [];
    const currentYear = parseInt((0, getCurrentTime_1.getCurrentTime)('year'));
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    const daysInYear = isLeapYear(currentYear) ? 366 : 365;
    const startDate = new Date(`${currentYear}-01-01`);
    for (let dayOfYear = 0; dayOfYear < daysInYear; dayOfYear++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + dayOfYear);
        const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const dayOfWeekNumber = ((currentDate.getDay() + 6) % 7) + 1;
        days.push({
            date: currentDate.toLocaleDateString('en-GB'),
            dayOfTheWeek: dayOfWeek,
            dayOfWeekNumber: dayOfWeekNumber,
        });
    }
    return days;
};
exports.generateYearArray = generateYearArray;
