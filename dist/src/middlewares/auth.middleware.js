"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';
// Middleware to check for required permissions based on user roles
const authMiddleware = (requiredRoles) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access token required' });
        }
        jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res
                    .status(403)
                    .json({ message: 'User not authenticated, Invalid token' });
            }
            const user = decoded;
            if (!user.roles || user.roles.length === 0) {
                return res
                    .status(403)
                    .json({ message: 'Access forbidden: no roles found' });
            }
            // Check if the user has any of the required roles
            const hasPermission = user.roles.some((role) => requiredRoles.includes(role.name));
            if (!hasPermission) {
                return res
                    .status(403)
                    .json({ message: 'Access forbidden: insufficient permissions' });
            }
            req.user = user;
            next();
        });
    };
};
exports.authMiddleware = authMiddleware;
// Token generation function
const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        roles: user.roles,
    };
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
