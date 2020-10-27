import { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import pageNotFoundHandler from '../helpers/404Handler';
import errorHandler from '../helpers/errorHandler';
import appRoute from '../api/app/app.controller';

export default function expressLoader(app: Application): void {
  app.use(morgan('common'));
  app.use(helmet());
  app.use(cors({ origin: '*' }));

  app.use('/', appRoute);
  app.use('*', pageNotFoundHandler);
  app.use(errorHandler);

  return;
}
