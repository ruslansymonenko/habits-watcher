"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user.router"));
const habits_router_1 = __importDefault(require("./habits.router"));
const mainData_router_1 = __importDefault(require("./mainData.router"));
const router = (0, express_1.Router)();
router.use('/user', user_router_1.default);
router.use('/habit', habits_router_1.default);
router.use('/data', mainData_router_1.default);
exports.default = router;
