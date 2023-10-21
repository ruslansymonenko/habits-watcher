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
exports.deleteHabitService = void 0;
const database_1 = __importDefault(require("../../database/database"));
const deleteHabitService = ({ userId, habitId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            text: 'SELECT * FROM habits WHERE user_id = $1',
            values: [userId],
        };
        const { rows } = yield database_1.default.query(query);
        const habitToDelete = rows.find((habit) => habit.id === parseInt(habitId));
        if (habitToDelete) {
            const deleteQuery = {
                text: 'DELETE FROM habits WHERE id = $1',
                values: [habitId],
            };
            yield database_1.default.query(deleteQuery);
            const result = {
                isDone: true,
                data: null,
                statusMessage: 'Habit was successfully deleted',
            };
            return result;
        }
        else {
            const result = {
                isDone: false,
                data: null,
                statusMessage: 'Habit not found',
            };
            return result;
        }
    }
    catch (error) {
        const result = {
            isDone: false,
            data: null,
            statusMessage: null,
        };
        return result;
    }
});
exports.deleteHabitService = deleteHabitService;
