import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE !== 'production') {
    return res.status(err.status || 500).json({
      error: err.errorBol,
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }
  return res.status(err.status || 500).json({
    error: err.errorBol,
    status: err.status,
    message: err.message,
  });
}
