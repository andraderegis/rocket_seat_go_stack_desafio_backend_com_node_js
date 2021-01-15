const { uuid } = require('uuidv4');

const respositories = [];

class RepositoriesRoute {
    constructor(router) {
        this._router = router;
    }

    routes() {
        this._router.get('/', (req, res) => {
            return res.status(200).json(respositories);
        });

        this._router.post('/', (req, res) => {
            const { title, url, techs } = req.body;

            const repository = {
                id: uuid(),
                title,
                url,
                techs,
                likes: 0
            }

            respositories.push(repository);

            return res.status(201).json(repository);
        });

        this._router.put('/:id', (req, res) => {

        });

        this._router.delete('/:id', (req, res) => {

        });
        
        this._router.post('/:id/like', (req, res) => {

        });

        return this._router;
    }
}

module.exports = RepositoriesRoute;