import express from 'express';

import readingRoutes from './readingRoutes';

const router = express.Router();

export default (): express.Router => {
  readingRoutes(router);

  return router;
};