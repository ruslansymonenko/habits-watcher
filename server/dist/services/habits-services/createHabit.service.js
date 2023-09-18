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
exports.createNewHabit = void 0;
const database_1 = __importDefault(require("../../database/database"));
const createNewHabit = ({ title, habit_condition, color, user_id, week_days, habit_day_start, }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = {
        isDone: false,
        statusMessage: null,
    };
    try {
        const query = `
      INSERT INTO habits (title, habit_condition, color, user_id, week_days, habit_day_start)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
        const values = [title, habit_condition, color, user_id, week_days, habit_day_start];
        const newHabit = yield database_1.default.query(query, values);
        if (newHabit.rows.length > 0) {
            result.isDone = true;
            result.statusMessage = 'Habit created successfully';
            return result;
        }
        else {
            result.isDone = false;
            result.statusMessage = 'Habit creation error';
            return result;
        }
    }
    catch (error) {
        result.isDone = false;
        result.statusMessage = `${error}`;
        return result;
    }
});
exports.createNewHabit = createNewHabit;
