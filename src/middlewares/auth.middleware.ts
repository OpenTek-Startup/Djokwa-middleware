import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface JwtPayloadCustom extends JwtPayload {
  id: number;
  email: string;
  roles: { id: number; name: string }[];
}

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Check for permissions based on user roles
export const authMiddleware = (requiredRoles: String[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: 'User not authenticated, Invalid token' });
      }

      const user = decoded as JwtPayloadCustom;

      // Check if roles exist
      if (!user.roles) {
        return res
          .status(403)
          .json({ message: 'Access forbidden: no roles found' });
      }

      // Check if the user has at least one of the required roles
      const hasPermission = user.roles.some((role) =>
        requiredRoles.includes(role.name)
      );

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

// generate the token
export const generateToken = (user: {
  id: number;
  email: string;
  roles: { id: number; name: string }[];
}) => {
  const payload = {
    id: user.id,
    email: user.email,
    roles: user.roles,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};
