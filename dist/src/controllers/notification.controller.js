"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotification = exports.updateNotification = exports.getNotificationById = exports.getNotifications = exports.createNotification = void 0;
const client_1 = require("@prisma/client");
const notification_validator_1 = require("../valdators/notification.validator");
const class_validator_1 = require("class-validator");
const prisma = new client_1.PrismaClient();
const createNotification = async (req, res) => {
    const { title, time, message, type } = req.body;
    try {
        //Validate the date
        const notifcationData = req.body;
        const createNotificationDto = new notification_validator_1.CreateDataDto();
        Object.assign(createNotificationDto, notifcationData);
        const errors = await (0, class_validator_1.validate)(exports.createNotification);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Invalid details',
                errors: errors,
            });
        }
        //create a new notification
        const Notification = await prisma.notification.create({
            data: {
                title: notifcationData.title,
                time: new Date(notifcationData.time),
                message: notifcationData.message,
                type: notifcationData.type,
            },
        });
        res.status(201).json(Notification);
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
            error,
        });
    }
};
exports.createNotification = createNotification;
const getNotifications = async (req, res) => {
    try {
        const Notifications = await prisma.notification.findMany();
        res.status(200).json(Notifications);
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.getNotifications = getNotifications;
const getNotificationById = async (req, res) => {
    const { id } = req.params;
    try {
        const Notification = await prisma.notification.findUnique({
            where: { Id: Number(id) },
        });
        if (!Notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.status(200).json(Notification);
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.getNotificationById = getNotificationById;
const updateNotification = async (req, res) => {
    const { id } = req.params;
    const { title, time, message, type } = req.body;
    try {
        const updateNotification = req.body;
        const updateNotificationDto = new notification_validator_1.UpdateDataDto();
        Object.assign(updateNotificationDto, updateNotification);
        const errors = await (0, class_validator_1.validate)(updateNotification);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors: errors,
            });
        }
        const updatedNotification = await prisma.notification.update({
            where: { Id: Number(id) },
            data: {
                title,
                time,
                message,
                type,
            },
        });
        res.status(200).json(updatedNotification);
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.updateNotification = updateNotification;
const deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.notification.delete({
            where: { Id: Number(id) },
        });
        res.status(204).json({ type: 'success', message: 'Account deleted' });
    }
    catch (error) {
        res.status(500).json({
            type: 'error',
            message: 'error.message',
        });
    }
};
exports.deleteNotification = deleteNotification;
