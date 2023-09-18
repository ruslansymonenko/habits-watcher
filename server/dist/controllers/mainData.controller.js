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
exports.getMainData = void 0;
const generateMainData_service_1 = require("../services/mainData-services/generateMainData.service");
const logger_service_1 = require("../services/logger.service");
const getMainData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        if (userId) {
            const mainData = yield (0, generateMainData_service_1.generateMainData)(userId);
            if (mainData.isDone) {
                return res.json({
                    isDone: true,
                    data: mainData.data,
                    statusMessage: 'Data received',
                });
            }
            else {
                (0, logger_service_1.loggerService)('error', 'Data was not receiving from main data servise');
                return res.json({
                    isDone: false,
                    data: null,
                    statusMessage: 'Main data was not receiving from server',
                });
            }
        }
        else {
            return res.json({
                isDone: false,
                data: null,
                statusMessage: 'No user id',
            });
        }
    }
    catch (error) {
        (0, logger_service_1.loggerService)('error', `${error}`);
        return res.json({
            isDone: false,
            data: null,
            statusMessage: 'Data was not received from server',
        });
    }
});
exports.getMainData = getMainData;
