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
exports.updateUserService = void 0;
const database_1 = __importDefault(require("../../database/database"));
const updateUserEmail = (id, newEmail) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.default.query(`UPDATE users set email = $1 where id = $2 RETURNING *`, [
            newEmail,
            id,
        ]);
        const userData = user.rows[0];
        const response = {
            isDone: true,
            statusMessage: 'The email was successfully updated',
            user: userData,
        };
        return response;
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Some error, please, try later',
        };
        return response;
    }
});
const updateUserPassword = (id, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.default.query(`UPDATE users set password = $1 where id = $2 RETURNING *`, [
            newPassword,
            id,
        ]);
        const userData = user.rows[0];
        const response = {
            isDone: true,
            statusMessage: 'The password was successfully updated',
            user: userData,
        };
        return response;
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Some error, please, try later',
        };
        return response;
    }
});
const updateUserName = (id, newName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.default.query(`UPDATE users set user_name = $1 where id = $2 RETURNING *`, [
            newName,
            id,
        ]);
        const userData = user.rows[0];
        const response = {
            isDone: true,
            statusMessage: 'The name was successfully updated',
            user: userData,
        };
        return response;
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Some error, please, try later',
        };
        return response;
    }
});
const updateUserPhoto = (id, newPhoto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.default.query(`UPDATE users set photo_url = $1 where id = $2 RETURNING *`, [
            newPhoto,
            id,
        ]);
        const userData = user.rows[0];
        const response = {
            isDone: true,
            statusMessage: 'The photo was successfully updated',
            user: userData,
        };
        return response;
    }
    catch (error) {
        const response = {
            isDone: false,
            statusMessage: 'Some error, please, try later',
        };
        return response;
    }
});
const updateUserService = ({ updateType, userId, newData, }) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        isDone: false,
        statusMessage: '',
    };
    switch (updateType) {
        case 'email':
            response = yield updateUserEmail(userId, newData);
            break;
        case 'password':
            response = yield updateUserPassword(userId, newData);
            break;
        case 'name':
            response = yield updateUserName(userId, newData);
            break;
        case 'photo':
            response = yield updateUserPhoto(userId, newData);
            break;
        default:
            response = {
                isDone: false,
                statusMessage: 'something going wrong',
            };
    }
    return response;
});
exports.updateUserService = updateUserService;
