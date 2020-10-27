import express, { Application } from 'express';
import initLoaders from './loaders/loader-init';

function startServer() {
  const app: Application = express();
  const PORT: number = parseInt(process.env.PORT!) || 2058;
  initLoaders(app);

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

startServer();
