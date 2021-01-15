const request = require('supertest');
const app = require('../app');
const { v4: uuid, validate: isUuid } = require('uuid');

describe('Tests for Repositories Routes', () => {
    it('Should be able to create a new repository', async () => {
        const respositoryDataToCreate = {
            title: 'Rocket Seat Go Stack Desafio Back-end com NodeJS',
            url:
                'https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js',
            techs: ['Node.js', 'ExpressJS', 'Jest']
        };

        const response = await request(app)
            .post('/repositories')
            .send(respositoryDataToCreate)
            .expect(201);

        const body = response.body;
        const { id } = body;

        expect(body).toBeDefined();
        expect(isUuid(id)).toBeTruthy();
        expect(body).toMatchObject(respositoryDataToCreate);
    });
    it('Should be able to list the repositories', async () => {
        const response = await request(app).get('/repositories').expect(200);

        const body = response.body;

        expect(body.length).toBeTruthy();
    });

    it('Should be able to update repository', async () => {
        const respositoryDataToCreate = {
            title: 'Go Stack Desafio Back-end com NodeJS',
            url:
                'https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js',
            techs: ['Node.js', 'ExpressJS', 'Jest']
        };

        const createResponse = await request(app)
            .post('/repositories')
            .send(respositoryDataToCreate);

        const { id } = createResponse.body;

        const repositoryDataToUpdate = {
            title: 'Golang Desafio K8S HPA',
            url:
                'https://github.com/andraderegis/full-cycle-code-education-golang-desafio-k8s-hpa',
            techs: ['Golang', 'Docker', 'Kubernets', 'Google Cloud Plataform']
        };

        const updateResponse = await request(app)
            .put(`/repositories/${id}`)
            .send(repositoryDataToUpdate)
            .expect(200);

        const body = updateResponse.body;

        expect(body).toBeDefined();
        expect(body).toMatchObject(repositoryDataToUpdate);
    });

    it('Should not be able to update a repository that does not exist', async () => {
        const response = await request(app)
            .put(`/repositories/${uuid()}`)
            .send({})
            .expect(400);

        expect(response.body).toMatchObject({
            error: 'Not found repository.'
        });
    });

    it('should not be able to update repository likes manually', async () => {
        const expectedLikes = 0;

        const respositoryDataToCreate = {
            title: 'Desafio Back-end com NodeJS',
            url:
                'https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js',
            techs: ['Node.js', 'ExpressJS', 'Jest', 'Docker']
        };

        const createResponse = await request(app)
            .post('/repositories')
            .send(respositoryDataToCreate);

        expect(createResponse.body.likes).toEqual(expectedLikes);

        const respositoryDataToUpdate = {
            techs: ['Node.js', 'ExpressJS', 'Jest']
        };

        const updateResponse = await request(app)
            .put(`/repositories/${createResponse.body.id}`)
            .send(respositoryDataToUpdate)
            .expect(200);

        expect(updateResponse.body.likes).toEqual(expectedLikes);
        expect(updateResponse.body).toMatchObject(respositoryDataToUpdate);
    });

    it('Should be able to delete the repository', async () => {
        const respositoryDataToCreate = {
            title: 'Desafio Back-end com NodeJS',
            url:
                'https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js',
            techs: ['Node.js', 'ExpressJS']
        };

        const createResponse = await request(app)
            .post('/repositories')
            .send(respositoryDataToCreate);

        const response = await request(app)
            .delete(`/repositories/${createResponse.body.id}`)
            .expect(204);

        expect(response.body).toMatchObject({});
    });

    it('Should not be able to delete a repository that does not exist', async () => {
        const response = await request(app)
            .delete(`/repositories/${uuid()}`)
            .expect(400);

        expect(response.body).toMatchObject({
            error: 'Not found repository.'
        });
    });
});
