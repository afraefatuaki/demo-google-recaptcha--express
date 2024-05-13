const app = require('../../app');
const request = require('supertest');
const verifyReCaptchaToken = require('../../helpers/verifyReCaptchaToken');
const { describe, expect, test } = require('@jest/globals');

jest.mock('../../helpers/verifyReCaptchaToken', () => jest.fn());

describe('GET /contact', () => {
  test('...', () => {
    return request(app).get('/contact').expect(200);
  });
});

describe('POST /contact', () => {
  test('should return 200 when reCaptcha verification is successful', async () => {
    verifyReCaptchaToken.mockResolvedValue({
      success: true,
      challenge_ts: '2022-01-01T00:00:00Z',
      hostname: 'test.com',
      score: 1.0,
      action: 'test',
    });

    const response = await request(app).post('/contact').send({
      email: 'joe@doe.com',
      name: 'Joe',
      message: 'Hello World!',
      token: 'abc123',
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Form submitted.');
  });

  test('❌...', async () => {
    verifyReCaptchaToken.mockResolvedValue({
      success: true,
      challenge_ts: '2022-01-01T00:00:00Z',
      hostname: 'test.com',
      score: 0.4,
      action: 'test',
    });

    const response = await request(app).post('/contact').send({
      email: 'joe@doe.com',
      name: 'Joe',
      message: 'Hello World!',
      token: 'abc123',
    });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('reCaptcha failed');
  });

  test('❌...', async () => {
    const response = await request(app).post('/contact').send({
      email: 'joe@doe com',
      name: 'Joe',
      message: 'Hello World!',
      token: 'abc123',
    });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Invalid email');
  });
});
