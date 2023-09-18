"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDbDate = void 0;
const formatDbDate = (dateFromDb) => {
    const date = new Date(dateFromDb);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};
exports.formatDbDate = formatDbDate;
