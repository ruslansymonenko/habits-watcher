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
exports.deleteUser = exports.updateUser = exports.getUser = exports.login = exports.register = void 0;
const logger_service_1 = require("../services/logger.service");
const registration_service_1 = require("../services/user-services/registration.service");
const login_servise_1 = require("../services/user-services/login.servise");
const deleteUser_service_1 = require("../services/user-services/deleteUser.service");
const updateUser_service_1 = require("../services/user-services/updateUser.service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const userRegistration = yield (0, registration_service_1.registrationService)({
                email: email,
                password: password,
            });
            if (userRegistration.isDone) {
                (0, logger_service_1.loggerService)('success', 'successful registration');
                const response = {
                    isRequestDone: true,
                    message: userRegistration.statusMessage,
                    user: userRegistration.user,
                    token: userRegistration.token,
                };
                return res.json(response);
            }
            else {
                (0, logger_service_1.loggerService)('error', 'registration error, registrationService: isDone=false');
                const response = {
                    isRequestDone: false,
                    message: userRegistration.statusMessage,
                    user: userRegistration.user,
                    token: userRegistration.token,
                };
                return res.json(response);
            }
        }
        catch (error) {
            (0, logger_service_1.loggerService)('error', `${error}`);
            const response = {
                isRequestDone: false,
                message: 'Wrong auth data was sent to the server, check do you send email and password',
                user: null,
                token: null,
            };
            return res.json(response);
        }
    }
    else {
        (0, logger_service_1.loggerService)('error', 'Wrong auth data');
        const response = {
            isRequestDone: false,
            message: 'Wrong auth data was sent to the server, check do you send email and password',
            user: null,
            token: null,
        };
        return res.json(response);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const userLogin = yield (0, login_servise_1.loginService)({
                email: email,
                password: password,
            });
            if (userLogin.isDone) {
                (0, logger_service_1.loggerService)('success', 'successful login');
                return res.json({
                    message: userLogin.statusMessage,
                    user: userLogin.user,
                    token: userLogin.token,
                });
            }
            else {
                (0, logger_service_1.loggerService)('error', 'login error, loginServicee: isDone=false');
                return res.json({
                    message: userLogin.statusMessage,
                });
            }
        }
        catch (error) {
            (0, logger_service_1.loggerService)('error', `${error}`);
            return res.json({
                message: 'Wrong auth data was sent to the server, check do you send email and password',
            });
        }
    }
    else {
        (0, logger_service_1.loggerService)('error', 'Wrong auth data');
        return res.json({
            message: 'Wrong auth data was sent to the server, check do you send email and password',
        });
    }
});
exports.login = login;
const getUser = (req, res) => {
    const userId = req.params.id;
    if (userId) {
        return res.json({
            message: 'get user',
        });
    }
    else {
        return res.json({
            message: 'get user',
        });
    }
};
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { updateType, userId, newData } = req.body;
    let updateServiceResponse = {
        isDone: false,
        statusMessage: '',
        user: null,
    };
    if (updateType && newData) {
        switch (updateType) {
            case 'email':
                updateServiceResponse = yield (0, updateUser_service_1.updateUserService)({
                    updateType: 'email',
                    userId: userId,
                    newData,
                });
                break;
            case 'password':
                updateServiceResponse = yield (0, updateUser_service_1.updateUserService)({
                    updateType: 'password',
                    userId: userId,
                    newData,
                });
                break;
            case 'name':
                updateServiceResponse = yield (0, updateUser_service_1.updateUserService)({
                    updateType: 'name',
                    userId: userId,
                    newData,
                });
                break;
            case 'photo':
                updateServiceResponse = yield (0, updateUser_service_1.updateUserService)({
                    updateType: 'photo',
                    userId: userId,
                    newData,
                });
                break;
            default:
                (0, logger_service_1.loggerService)('error', 'wrong type of updated data');
                return res.json({
                    message: 'the type of data being updated does not match any of the installed ones',
                });
        }
        if (updateServiceResponse.isDone === true) {
            (0, logger_service_1.loggerService)('success', 'The data was successfully updated');
            return res.json({
                message: updateServiceResponse.statusMessage,
                user: updateServiceResponse.user,
            });
        }
        else {
            (0, logger_service_1.loggerService)('error', 'Erorr with updating data on Update User Service');
            return res.json({
                message: updateServiceResponse.statusMessage,
            });
        }
    }
    else {
        (0, logger_service_1.loggerService)('error', 'updateType and newData is required for update');
        return res.json({
            message: 'For update data is required: update type and new data',
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    if (userId) {
        try {
            const deleteUser = yield (0, deleteUser_service_1.deleteUserService)({
                id: userId,
            });
            if (deleteUser.isDone) {
                (0, logger_service_1.loggerService)('success', `User: ${userId} was deleted`);
                return res.json({
                    message: deleteUser.statusMessage,
                });
            }
            else {
                (0, logger_service_1.loggerService)('error', 'problem with deleting a user in delete service');
                return res.json({
                    message: deleteUser.statusMessage,
                });
            }
        }
        catch (error) {
            (0, logger_service_1.loggerService)('error', `${error}`);
            return res.json({
                message: 'Some error, please, try later',
            });
        }
    }
    else {
        (0, logger_service_1.loggerService)('error', 'User ID was not found');
        return res.json({
            message: 'User ID is required',
        });
    }
});
exports.deleteUser = deleteUser;
