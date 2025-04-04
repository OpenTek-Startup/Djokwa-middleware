"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTime = () => {
    const dateObject = new Date();
    const date = dateObject.getDate();
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const day = days[dateObject.getDay()];
    const hour = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const minute = minutes.toLocaleString().length < 2 ? `0${minutes}` : minutes;
    return `${hour}:${minute} at ${day}, ${date}`;
};
const info = (namespace, message, object) => {
    if (object)
        return console.info(`[${namespace}] - [INFO]: ${message}`, object);
    return console.info(`[${getTime()}] [${namespace}] - [INFO]: ${message}`);
};
const error = (namespace, message, object) => {
    if (object)
        return console.error(`[${namespace}] - [ERROR]: ${message}`, object);
    return console.error(`[${getTime()}] [${namespace}] - [ERROR]: ${message}`);
};
exports.default = { info, error };
