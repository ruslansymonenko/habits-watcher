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
exports.registraterUser = void 0;
const database_1 = __importDefault(require("../../database/database"));
const registraterUser = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield database_1.default.query(`INSERT INTO users (email, password) values ($1, $2) RETURNING *`, [email, password]);
        const userData = newUser.rows[0];
        const response = {
            isDone: true,
            statusMessageClient: 'User has successfully registered',
            user: userData,
        };
        console.log(email, password);
        return response;
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessageClient: 'Some error, please, try later',
        };
        return response;
    }
});
exports.registraterUser = registraterUser;
