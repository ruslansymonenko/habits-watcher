"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainData = void 0;
const generateMainData_service_1 = require("../services/mainData-services/generateMainData.service");
const getMainData = (req, res) => {
    const mainData = (0, generateMainData_service_1.generateMainData)();
    console.log('main data');
    return res.json({
        data: mainData.data,
    });
};
exports.getMainData = getMainData;
