const request = require('supertest');
const app = require('../server/server');

describe('POST /registration', () => {
  describe('given all form inputs', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/registration')
        .send({
          firstName: 'first name',
          lastName: 'last name',
          address1: '213 street',
          address2: '#123',
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '12345',
          country: 'USA',
        });
      expect(response.statusCode).toBe(201);
    });
  });
});

describe('GET /report', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/report');
    expect(response.statusCode).toBe(200);
  });
  test('should specify content type header as json', async () => {
    const response = await request(app).get('/report');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });
});
