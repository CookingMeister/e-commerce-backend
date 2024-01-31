const app = require('../server.js');
const request = require('supertest');
const { Category } = require('../models');

beforeAll(async () => {
  await Category.sequelize.sync();
});

describe('GET /api/categories', () => {
  test('responds with all categories', async () => {
    return request(app)
      .get('/api/categories')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty('id');
      });
  });
  test('includes associated products', async () => {
    const response = await request(app)
      .get('/api/categories')
      .then((response) => {
        expect(response.body[0].products).toBeDefined(); // good
        expect(Array.isArray(response.body[0].products)).toBeTruthy();
      });
  });
});

describe('GET /api/categories/:id', () => {
  test('responds with a category by id', async () => {
    const category = await Category.findByPk(1);
    await request(app)
      .get(`/api/categories/${category.id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(category.id);
      });
  });
  test('includes associated products', async () => {
    const response = await request(app)
      .get(`/api/categories/${1}`) // good
      .then((response) => {
        expect(response.body.products).toBeDefined();
        expect(Array.isArray(response.body.products)).toBeTruthy();
      });
  });
});

afterAll(async () => {
  await Category.sequelize.close();
});


