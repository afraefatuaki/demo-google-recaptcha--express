const { describe, expect, test } = require('@jest/globals');
const { getEnvironment } = require('../../utils/environment');

describe('Get current environment', () => {
  test('should return the correct environment', () => {
    process.env.NODE_ENV = 'development';
    expect(getEnvironment()).toBe('development');
  });

  test('should return undefined if NODE_ENV is not set', () => {
    delete process.env.NODE_ENV;
    expect(getEnvironment()).toBeUndefined();
  });
});
