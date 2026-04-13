const request = require('supertest');
const { app, server } = require('./app');

describe('CI/CD Pipeline App', () => {
  
  // Health check test
  test('GET /health should return 200 with healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  // API info test
  test('GET /api/info should return app info', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.app).toBe('CICD Learning App');
    expect(res.body.version).toBe('1.0.0');
  });

  // 404 test
  test('GET /nonexistent should return 404', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });

});

// Test cleanup
afterAll(() => {
  if (server) server.close();
});
