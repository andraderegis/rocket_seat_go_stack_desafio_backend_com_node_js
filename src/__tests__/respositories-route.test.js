const request = require('supertest');
const app = require('../app');

describe('Tests for Repositories Routes', () => {
    it('Should be able to list the repositories', async () => {
        const response = await request(app)
            .get('/repositories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const body = response.body;

        expect(body.length).toBeTruthy();    
    });
});