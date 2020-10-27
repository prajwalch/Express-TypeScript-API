import { Application } from 'express';
import expressLoader from './express.loader';

export default function initLoaders(app: Application) {
  expressLoader(app);
}
