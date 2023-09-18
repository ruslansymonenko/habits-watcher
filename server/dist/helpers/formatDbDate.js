"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDbDate = void 0;
const formatDbDate = (dateFromDb) => {
    const date = new Date(dateFromDb);
    const day = date.getUTCDate() + 1;
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};
exports.formatDbDate = formatDbDate;
