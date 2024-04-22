export function getEnvironment() {
  return process.env.NODE_ENV;
}

export function isDevelopmentEnvironment() {
  return getEnvironment() === 'development';
}

export function getPortNumber() {
  return parseInt(process.env.PORT || '8080');
}
