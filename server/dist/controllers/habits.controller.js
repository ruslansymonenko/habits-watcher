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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHabit = exports.updateHabit = exports.getHabits = exports.createHabit = void 0;
const logger_service_1 = require("../services/logger.service");
const createHabit_service_1 = require("../services/habits-services/createHabit.service");
const createHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.userId) === null || _a === void 0 ? void 0 : _a.toString();
        const { title, habit_condition, color, week_days, habit_day_start, habit_icon } = req.body;
        if (!title || !habit_condition || !color || !userId || !habit_day_start) {
            const response = {
                isDone: false,
                statusMessage: 'Not correct data',
            };
            (0, logger_service_1.loggerService)('error', 'Not correct data for creating habit');
            return res.json(response);
        }
        const isValidWeekDays = (weekDays) => {
            const validDays = [1, 2, 3, 4, 5, 6, 7];
            for (const day of weekDays) {
                if (!validDays.includes(day)) {
                    return false;
                }
            }
            return true;
        };
        if (!Array.isArray(week_days) || !isValidWeekDays(week_days)) {
            const response = {
                isDone: false,
                statusMessage: 'Not correct week days',
            };
            return res.json(response);
        }
        if (typeof title === 'string' &&
            typeof habit_condition === 'string' &&
            typeof color === 'string' &&
            typeof userId === 'string' &&
            typeof habit_day_start === 'string' &&
            typeof habit_icon === 'string') {
            const newHabit = yield (0, createHabit_service_1.createNewHabit)({
                title: title,
                habit_condition: habit_condition,
                color: color,
                user_id: userId,
                week_days: week_days,
                habit_day_start: habit_day_start,
                habit_icon: habit_icon,
            });
            const response = {
                isDone: newHabit.isDone,
                statusMessage: newHabit.statusMessage,
            };
            return res.json(response);
        }
        else {
            const response = {
                isDone: false,
                statusMessage: 'Not correct data types',
            };
            return res.json(response);
        }
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Server error, please, try later',
        };
        (0, logger_service_1.loggerService)('error', `${error}`);
        return res.json(response);
    }
});
exports.createHabit = createHabit;
const getHabits = (req, res) => {
    return res.json({
        message: 'hello',
    });
};
exports.getHabits = getHabits;
const updateHabit = (req, res) => {
    return res.json({
        message: 'update',
    });
};
exports.updateHabit = updateHabit;
const deleteHabit = (req, res) => {
    return res.json({
        message: 'delete',
    });
};
exports.deleteHabit = deleteHabit;
