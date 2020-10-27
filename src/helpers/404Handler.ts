import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

export default function pageNotFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const notFoundError = new HttpException(true, 404, 'Page not found');
  return next(notFoundError);
}
