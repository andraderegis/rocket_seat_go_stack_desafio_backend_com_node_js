const request = require('supertest');
const app = require('../app');
const { v4: uuid } = require('uuid');

describe('Tests for Likes Route', () => {
    it('Should be able to give a like to the repository', async () => {
        const expectedLikes = 1;

        const respositoryDataToCreate = {
            title: 'Desafio Back-end com NodeJS',
            url:
                'https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js',
            techs: ['Node.js', 'ExpressJS', 'Docker']
        };

        const createResponse = await request(app)
            .post('/repositories')
            .send(respositoryDataToCreate);

        const likeResponse = await request(app)
            .post(`/repositories/${createResponse.body.id}/like`)
            .send({});

        expect(createResponse.body).toMatchObject(respositoryDataToCreate);
        expect(likeResponse.body.likes).toEqual(expectedLikes);
    });

    it('Should not be able to like a repository that does not exist', async () => {
        const response = await request(app)
            .post(`/repositories/${uuid()}/like`)
            .send({})
            .expect(400);

        expect(response.body).toMatchObject({
            error: 'Not found repository.'
        });
    });
});
