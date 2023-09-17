"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMainData = void 0;
const generateYearArray_1 = require("../../helpers/generateYearArray");
const generateMainData = () => {
    const year = (0, generateYearArray_1.generateYearArray)();
    const yearWithData = [];
    for (const day of year) {
        const habit = {
            name: 'sport',
            icon: '',
            condition: '1h',
            color: '#55efc4',
            status: false,
        };
        const dayData = {
            data: day.date,
            dayOfTheWeek: day.dayOfTheWeek,
            dayOfWeekNumber: day.dayOfWeekNumber,
            habits: [habit],
        };
        yearWithData.push(dayData);
    }
    const data = {
        data: {
            '2023': yearWithData,
        },
    };
    return data;
};
exports.generateMainData = generateMainData;
