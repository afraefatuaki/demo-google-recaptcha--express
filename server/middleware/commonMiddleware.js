const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { isDevelopmentEnvironment } = require('../utils/environment.js');

function applyCommonMiddleware(app) {
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

module.exports = applyCommonMiddleware;
