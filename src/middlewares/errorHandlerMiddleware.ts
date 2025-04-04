import { StatusCodes } from 'http-status-codes';
// import { Response, Request,NextFunction} from "express";
import { ErrorRequestHandler } from 'express';
const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log('error:', err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, try again later';
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
