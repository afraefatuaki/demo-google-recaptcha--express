const { describe, expect, test } = require('@jest/globals');
const { isValidInput, isEmail } = require('../../helpers/inputValidation');

describe('Validate email input field', () => {
  test('✅ should return true', () => {
    expect(isEmail('afrae@elfatuaki.com')).toBe(true);
  });
  test('❌ should return false', () => {
    expect(isEmail('afrae@elfatuaki.com@')).toBe(false);
  });
  test('❌ should return false', () => {
    expect(isEmail('afrae@el    fatuaki.com@')).toBe(false);
  });
});

describe('Validate name input field', () => {
  test('✅ should return true', () => {
    expect(isValidInput('Afrae')).toBe(true);
  });
  test('❌ should return false', () => {
    expect(isValidInput('   a')).toBe(false);
  });
});
