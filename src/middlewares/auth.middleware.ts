import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface JwtPayloadCustom extends JwtPayload {
  id: number;
  email: string;
}

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = decoded as JwtPayloadCustom;
    next();
  });
};
