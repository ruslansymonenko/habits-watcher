"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainData_controller_1 = require("../controllers/mainData.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const mainDataRouter = (0, express_1.Router)();
mainDataRouter.get('/get', checkAuth_1.checkAuth, mainData_controller_1.getMainData);
exports.default = mainDataRouter;
