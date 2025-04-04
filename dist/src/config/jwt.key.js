"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const base64_1 = require("../utils/base64");
dotenv_1.default.config();
exports.jwtToken = {
    privateKey: (0, base64_1.decodeBase64)(process.env.PRIVATE_KEY),
    publicKey: (0, base64_1.decodeBase64)(process.env.PUBLIC_KEY),
};
