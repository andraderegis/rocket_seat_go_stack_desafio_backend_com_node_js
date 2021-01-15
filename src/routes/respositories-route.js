const { uuid } = require('uuidv4');

const respositories = [];
const _checkRepositoriesIndex = Symbol('checkRepositoriesIndex');
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

            this[_checkRepositoriesIndex]({
                index: repositoryIndex,
                response: res
            });

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

        this._router.delete('/:id', (req, res) => {
            const { id } = req.params;

            const index = this[_findRepositoriesIndex](id);

            this[_checkRepositoriesIndex]({
                index,
                response: res
            });

            respositories.splice(index, 1);

            return this[_findRepositoriesIndex](id) < 0
                ? res.status(204).send()
                : res.status(500).send({
                      error: `Cannot remove repository ${id}.`
                  });
        });

        this._router.post('/:id/like', (req, res) => {
            const { id } = req.params;

            const index = this[_findRepositoriesIndex](id);

            this[_checkRepositoriesIndex]({
                index,
                response: res
            });

            const repository = respositories[index];

            const respositoryToIncrementLike = {
                ...repository,
                likes: repository.likes + 1
            };

            respositories[index] = respositoryToIncrementLike;

            return res.status(200).send(respositoryToIncrementLike);
        });

        return this._router;
    }

    [_findRepositoriesIndex](id) {
        return respositories.findIndex((repository) => repository.id === id);
    }

    [_checkRepositoriesIndex]({ index, response }) {
        if (index < 0) {
            return response.status(400).json({
                error: 'Not found repository.'
            });
        }
    }
}

module.exports = RepositoriesRoute;
