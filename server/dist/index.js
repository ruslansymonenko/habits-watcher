"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const logger_service_1 = require("./services/logger.service");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
app.use(express_1.default.json);
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    (0, logger_service_1.loggerService)('info', `Server was started on port ${PORT} . . .`);
});
