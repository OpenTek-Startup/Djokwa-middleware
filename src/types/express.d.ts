import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        roles: { id: number; name: string }[];
      };
    }
  }
}
