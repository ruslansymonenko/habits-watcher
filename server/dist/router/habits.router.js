"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habits_controller_1 = require("../controllers/habits.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const habitsRouter = (0, express_1.Router)();
habitsRouter.post('/create', checkAuth_1.checkAuth, habits_controller_1.createHabit);
habitsRouter.put('/update', checkAuth_1.checkAuth, habits_controller_1.updateHabit);
habitsRouter.post('/delete', checkAuth_1.checkAuth, habits_controller_1.deleteHabit);
exports.default = habitsRouter;
