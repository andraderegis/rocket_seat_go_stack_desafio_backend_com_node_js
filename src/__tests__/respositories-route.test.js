const request = require('supertest');
const app = require('../app');
const { isUuid } = require('uuidv4');
describe('Tests for Repositories Routes', () => {

    it('Should be able to create a new repository', async () => {
        const response = await request(app)
            .post('/repositories')
            .send({
                title: "Rockect Seat Go Stack Desafio Back-end com NodeJS",
                url: "https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js",
                techs: ["Node.js", "ExpressJS", "Jest"]
            })
            .expect(201);

        const body = response.body;

        expect(body).toBeDefined();

        const { id } = body;

        expect(isUuid(id)).toBeTruthy();

    });
    it('Should be able to list the repositories', async () => {
        const response = await request(app)
            .get('/repositories')
            .expect(200);

        const body = response.body;

        expect(body.length).toBeTruthy();    
    });
});