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
exports.updateUserService = void 0;
const updateUserEmail = (newEmail) => {
    try {
        const response = {
            isDone: true,
            statusMessage: 'User has successfully registered',
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
};
const updateUserPassword = (newPassword) => {
    try {
        const response = {
            isDone: true,
            statusMessage: 'User has successfully registered',
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
};
const updateUserName = (newName) => {
    try {
        const response = {
            isDone: true,
            statusMessage: 'User has successfully registered',
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
};
const updateUserPhoto = (newPhoto) => {
    try {
        const response = {
            isDone: true,
            statusMessage: 'User has successfully registered',
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
};
const updateUserService = ({ updateType, newData, }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = {
        isDone: false,
        statusMessage: '',
    };
    switch (updateType) {
        case 'email':
            yield updateUserEmail(newData);
            break;
        case 'password':
            yield updateUserPassword(newData);
            break;
        case 'name':
            yield updateUserName(newData);
            break;
        case 'photo':
            yield updateUserPhoto(newData);
            break;
        default:
            return response;
    }
    return response;
});
exports.updateUserService = updateUserService;
