const app = require('../server.js');
const request = require('supertest');
const { Tag, Category } = require('../models');
const sequelize = require('../config/connection.js');
const server = app.listen();

beforeAll(async () => {
  await sequelize.sync();
});

describe('GET /api/categories', () => {
  test('responds with all categories', async () => {
    return await request(app)
      .get('/api/categories')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0]).toHaveProperty('id');
      });
  });
  test('includes associated products', async () => {
    return await request(app)
      .get('/api/categories')
      .then((response) => {
        expect(response.body[0].products).toBeDefined();
        expect(Array.isArray(response.body[0].products)).toBeTruthy();
      });
  });
});

describe('GET /api/categories/:id', () => {
  test('responds with a category by id', async () => {
    const category = await Category.findByPk(1);
    return await request(app)
      .get(`/api/categories/${category.id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(category.id);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  test('includes associated products', async () => {
    return await request(app)
      .get(`/api/categories/${1}`)
      .then((response) => {
        expect(response.body.products).toBeDefined();
        expect(Array.isArray(response.body.products)).toBeTruthy();
      });
  });
});
describe('GET /api/products', () => {
  test('responds with all products', async () => {
    return await request(app)
      .get('/api/products')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });
});

describe('GET /api/products/:id', () => {
  test('responds with a product by id', async () => {
    const productId = 1;
    return await request(app)
      .get(`/api/products/${productId}`)
      .expect(200)
      .then((response) => {
        expect(response.body.id).toBe(productId);
      });
  });
});
describe('GET /api/tags', () => {
  it('should return all tags with associated products', async () => {
    const res = await request(app).get('/api/tags');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].products).toBeDefined();
  });
});

describe('GET /api/tags/:id', () => {
  it('should return tag by id with associated products', async () => {
    const tag = await Tag.findOne({
      where: {
        id: 1,
      },
    });

    const res = await request(app).get(`/api/tags/${tag.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(tag.id);
    expect(res.body.products).toBeDefined();
  });
});
  
afterAll(async () => {
  await sequelize.close();
  await new Promise(resolve => server.close(resolve));
});