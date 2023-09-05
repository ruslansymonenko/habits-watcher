"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerService = void 0;
const getCurrentTime_1 = require("../helpers/getCurrentTime");
const consoleFontColors = {
    error: '\x1b[31m',
    success: '\x1b[32m',
    info: '\x1b[36m',
    warn: '\x1b[33m',
};
const loggerService = (type, text) => {
    const currentTime = (0, getCurrentTime_1.getCurrentTime)('full');
    switch (type) {
        case 'error':
            console.log(`[${currentTime} System message]: ${consoleFontColors.error}${text}\x1b[0m`);
            break;
        case 'success':
            console.log(`[${currentTime} System message]: ${consoleFontColors.success}${text}\x1b[0m`);
            break;
        case 'info':
            console.log(`${currentTime} [System message]: ${consoleFontColors.info}${text}\x1b[0m`);
            break;
        case 'warn':
            console.log(`[${currentTime} System message]: ${consoleFontColors.warn}${text}\x1b[0m`);
            break;
        default:
            console.log(`[${currentTime} System message]: ${consoleFontColors.error}${text}\x1b[0m`);
    }
};
exports.loggerService = loggerService;
