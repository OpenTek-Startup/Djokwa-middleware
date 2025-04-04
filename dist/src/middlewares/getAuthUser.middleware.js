"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUserMiddleware = exports.getUserWithRoles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Type guard to ensure user has user_role as an array
const hasUserRolesArray = (user) => {
    return Array.isArray(user.user_role);
};
// Helper function to fetch user with roles based on a role string
const getUserWithRoles = async (role, email) => {
    try {
        // Adjust query according to role
        const user = await prisma.user.findUnique({
            where: { Email: email },
            include: {
                user_role: {
                    include: {
                        roles: true,
                    },
                },
            },
        });
        // If the user exists and has user roles, map them into an array
        if (user && hasUserRolesArray(user)) {
            const roles = user.user_role.map((ur) => ({
                id: ur.roles.Id,
                name: ur.roles.name,
            }));
            return {
                id: user.Id,
                email: user.Email,
                roles,
            };
        }
        return null;
    }
    catch (err) {
        console.error('Error fetching user with roles:', err);
        return null;
    }
};
exports.getUserWithRoles = getUserWithRoles;
// Middleware to fetch user data by role and email
const authUserMiddleware = async (req, res) => {
    const { role, email } = req.body;
    if (!role || !email) {
        return res.status(400).json({ error: 'Role and email are required' });
    }
    try {
        const user = await (0, exports.getUserWithRoles)(role, email);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        const errorMessage = error.message || 'Invalid request';
        res.status(400).json({ error: errorMessage });
    }
};
exports.authUserMiddleware = authUserMiddleware;
