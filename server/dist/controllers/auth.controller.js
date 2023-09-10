"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const register = (req, res) => {
    return res.json({
        message: 'register',
    });
};
exports.register = register;
const login = (req, res) => {
    return res.json({
        message: 'login',
    });
};
exports.login = login;
