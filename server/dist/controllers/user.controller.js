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
                return res.json({
                    message: userRegistration.statusMessage,
                });
            }
            else {
                (0, logger_service_1.loggerService)('error', 'registration error, registrationService: isDone=false');
                return res.json({
                    message: userRegistration.statusMessage,
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
exports.register = register;
const login = (req, res) => {
    return res.json({
        message: 'login',
    });
};
exports.login = login;
const getUser = (req, res) => {
    return res.json({
        message: 'login',
    });
};
exports.getUser = getUser;
const updateUser = (req, res) => {
    return res.json({
        message: 'login',
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    return res.json({
        message: 'login',
    });
};
exports.deleteUser = deleteUser;
