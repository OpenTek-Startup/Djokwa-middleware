"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const prisma = new client_1.PrismaClient();
const assignRole = (0, express_async_handler_1.default)(async (req, res, next) => {
    const { userId, roleName } = req.body;
    const role = await prisma.roles.findUnique({
        where: {
            name: roleName,
        },
    });
    if (!role) {
        res.status(404).json({ message: `Role ${roleName} not found` });
        return;
    }
    try {
        switch (role.name) {
            case 'admin':
                await prisma.user_roles.upsert({
                    where: { user_id: userId },
                    create: { user_id: userId, role_id: role.Id },
                    update: { role_id: role.Id },
                });
                break;
            case 'teacher':
                await prisma.user_roles.upsert({
                    where: { user_id: userId },
                    create: { user_id: userId, role_id: role.Id },
                    update: { role_id: role.Id },
                });
                break;
            case 'student':
                await prisma.user_roles.upsert({
                    where: { user_id: userId },
                    create: { user_id: userId, role_id: role.Id },
                    update: { role_id: role.Id },
                });
                break;
            case 'staff':
                await prisma.user_roles.upsert({
                    where: { user_id: userId },
                    create: { user_id: userId, role_id: role.Id },
                    update: { role_id: role.Id },
                });
                break;
            case 'parent':
                await prisma.user_roles.upsert({
                    where: { user_id: userId },
                    create: { user_id: userId, role_id: role.Id },
                    update: { role_id: role.Id },
                });
                break;
            default:
                res.status(400).json({ message: `Unhandled role: ${roleName}` });
                return;
        }
        res
            .status(200)
            .json({ message: `Role ${roleName} assigned to user ${userId}` });
    }
    catch (error) {
        next(error); // Pass the error to the next middleware
    }
});
exports.default = assignRole;
