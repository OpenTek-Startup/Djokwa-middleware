"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log('error:', err);
    const statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || 'something went wrong, try again later';
    res.status(statusCode).json({ msg });
};
exports.default = errorHandlerMiddleware;
