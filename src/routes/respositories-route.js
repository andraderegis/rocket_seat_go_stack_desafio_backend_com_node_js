const { uuid } = require('uuidv4');

const respositories = [];
const _findRepositoriesIndex = Symbol('findRepositoriesIndex');

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
            };

            respositories.push(repository);

            return res.status(201).json(repository);
        });

        this._router.put('/:id', (req, res) => {
            const { id } = req.params;

            const repositoryIndex = this[_findRepositoriesIndex](id);

            if (repositoryIndex < 0) {
                return res.status(400).json({
                    error: 'Not found repository.'
                });
            }

            const { title, url, techs } = req.body;

            const respository = {
                ...respositories[repositoryIndex],
                title,
                url,
                techs
            };

            respositories[repositoryIndex] = respository;

            return res.status(200).json(respository);
        });

        this._router.delete('/:id', (req, res) => {});

        this._router.post('/:id/like', (req, res) => {});

        return this._router;
    }

    [_findRepositoriesIndex](id) {
        return respositories.findIndex((repository) => repository.id === id);
    }
}

module.exports = RepositoriesRoute;
