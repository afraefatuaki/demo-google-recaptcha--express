import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { isDevelopmentEnvironment } from '../utils/environment.mjs';

export function applycommonMiddleware(app) {
  // Provide HTTP headers security
  app.use(helmet());

  // Enable Cross-Origin Resource Sharing
  app.use(cors());

  // Parse incoming requests with URL-encoded payloads
  app.use(express.urlencoded({ extended: false }));

  // Parse incoming requests with JSON payloads
  app.use(express.json());

  if (isDevelopmentEnvironment()) console.info('🔧 Common middlware applied');
}
