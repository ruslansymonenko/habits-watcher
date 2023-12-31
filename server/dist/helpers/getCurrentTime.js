"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTime = void 0;
const getCurrentTime = (type) => {
    const now = new Date();
    let result = '';
    const getTime = () => {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
    const getDate = () => {
        const year = String(now.getFullYear());
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };
    const getYear = () => {
        const year = String(now.getFullYear());
        return year;
    };
    if (type === 'time') {
        const currentTime = getTime();
        result = currentTime;
    }
    if (type === 'date') {
        const currentDate = getDate();
        result = currentDate;
    }
    if (type === 'full') {
        const currentTime = getTime();
        const currentDate = getDate();
        result = `${currentTime} ${currentDate}`;
    }
    if (type === 'year') {
        const year = getYear();
        result = year;
    }
    return result;
};
exports.getCurrentTime = getCurrentTime;
