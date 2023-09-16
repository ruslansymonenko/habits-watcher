"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try {
            const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';
            const decodedToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (decodedToken.userId) {
                req.userId = decodedToken.userId;
                next();
            }
            else {
                return res.json({
                    message: 'No token',
                });
            }
        }
        catch (error) {
            return res.json({
                message: 'No access',
            });
        }
    }
    else {
        return res.json({
            message: 'No access',
        });
    }
};
exports.checkAuth = checkAuth;
