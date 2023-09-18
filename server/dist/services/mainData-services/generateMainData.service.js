"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMainData = void 0;
const database_1 = __importDefault(require("../../database/database"));
const generateYearArray_1 = require("../../helpers/generateYearArray");
const formatDbDate_1 = require("../../helpers/formatDbDate");
const generateMainData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const year = (0, generateYearArray_1.generateYearArray)();
        const query = {
            text: 'SELECT * FROM habits WHERE user_id = $1',
            values: [userId],
        };
        const userHabits = (yield database_1.default.query(query)).rows;
        const yearWithData = year.map((day) => {
            const habitsForDay = userHabits.filter((habitObj) => {
                const habitStartDate = new Date((0, formatDbDate_1.formatDbDate)(habitObj.habit_day_start).split('/').reverse().join('/'));
                const dayDate = new Date(day.date.split('/').reverse().join('/'));
                return dayDate >= habitStartDate && habitObj.week_days.includes(day.dayOfWeekNumber);
            });
            if (habitsForDay.length) {
                return Object.assign(Object.assign({}, day), { habits: habitsForDay });
            }
            else {
                return Object.assign(Object.assign({}, day), { habits: null });
            }
        });
        const data = {
            isDone: true,
            data: {
                '2023': yearWithData,
            },
            statusMessage: 'Data was received',
        };
        return data;
    }
    catch (error) {
        const data = {
            isDone: false,
            data: null,
            statusMessage: `${error}`,
        };
        return data;
    }
});
exports.generateMainData = generateMainData;
