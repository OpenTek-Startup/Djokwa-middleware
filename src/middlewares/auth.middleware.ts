import express from 'express';
export const authMiddleware = (requiredPermission: string) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // Implement your authentication logic here
    console.log('Hello ', requiredPermission);
    next(); // Call next() to pass control to the next middleware
  };
};
