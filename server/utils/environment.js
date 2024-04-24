function getEnvironment() {
  return process.env.NODE_ENV;
}

function isDevelopmentEnvironment() {
  return getEnvironment() === 'development';
}

function getPortNumber() {
  return parseInt(process.env.PORT || '8080');
}

module.exports = {
  getEnvironment,
  isDevelopmentEnvironment,
  getPortNumber,
};
