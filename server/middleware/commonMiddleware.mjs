import express from 'express';

import { isDevelopmentEnvironment } from '../utils/environment.mjs';

export function applycommonMiddleware(app) {
  // Parse incoming requests with URL-encoded payloads
  app.use(express.urlencoded({ extended: false }));

  // Parse incoming requests with JSON payloads
  app.use(express.json());

  if (isDevelopmentEnvironment()) console.info('🔧 Common middlware applied');
}
