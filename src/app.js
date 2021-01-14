const express = require('express');
const RepositoriesRoute = require('./routes/respositories-route');
const validateUUIDMiddleware = require('./middlewares/validate-uuid-middleware');

const _initMiddlewares = Symbol('initMiddlewares');
const _initRoutes = Symbol('initRoutes');

class App {
    constructor() {
        this.express = express();
        this.router = express.Router();

        this[_initMiddlewares]();
        this[_initRoutes]();
    }

    [_initMiddlewares]() {
        this.express.use(express.json());
        this.express.use('/respositories/:id', validateUUIDMiddleware);
    }

    [_initRoutes]() {
        const repositoryRoute = new RepositoriesRoute(this.router);
        
        this.express.use('/repositories', repositoryRoute.routes());
    }
}

module.exports = new App().express;