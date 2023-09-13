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
exports.loginService = void 0;
const database_1 = __importDefault(require("../../database/database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginService = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkIsUser = yield database_1.default.query('SELECT * FROM users WHERE id = $1', [id]);
        if (checkIsUser.rows.length > 0) {
            const userData = checkIsUser.rows[0];
            const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';
            const token = jsonwebtoken_1.default.sign({
                userId: userData.id,
            }, JWT_SECRET, { expiresIn: '10d' });
            const response = {
                isDone: true,
                statusMessage: 'User received',
                user: userData,
                token: token,
            };
            return response;
        }
        else {
            const response = {
                isDone: false,
                statusMessage: 'This user is not registered',
            };
            return response;
        }
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Some error, please, try later',
        };
        return response;
    }
});
exports.loginService = loginService;
