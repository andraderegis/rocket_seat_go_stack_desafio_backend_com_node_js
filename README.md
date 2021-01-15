![GoStack](https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png)

<h2 align="center">GoStack - Desafio Back-end com NodeJS</h2>

# Sobre

**Este projeto se trata de uma API Restfull desenvolvida como desafio da Fase 1 do curso [GoStack](https://pages.rocketseat.com.br/gostack),
ministrado pela [RocketSeat](https://rocketseat.com.br/)**

# API

### Repositories

-   **Listar repositorios**

```
# GET /repositories

[
    {
        "id": "2c4b5db5-78cc-4156-94db-ffb60b8c83a8",
        "title": "Rocket Seat Go Stack Desafio Back-end com NodeJS",
        "url": "https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js",
        "techs": [
            "Node.js",
            "ExpressJS",
            "Jest"
        ],
        "likes": 0
    }
]
```

-   **Salvar repositorio**

```
# POST /repositories

{
	"title": "Rocket Seat Go Stack Desafio Back-end com NodeJS",
	"url": "https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js",
	"techs": ["Node.js", "ExpressJS", "Jest"]
}
```

-   **Atualizar repositorio**

    > As propriedades permitidas nessa operação são: title, url, techs. Elas podem ser informadas
    > separadamente.

```
# PUT /repositories/{id}

{
	"title": "Desafio Back-end com NodeJS",
	"url": "https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js",
	"techs": ["Node.js", "ExpressJS"]
}
```

-   **Remover repositorio**

```
# DELETE /repositories/{id}

{}
```

### Likes

-   **Curtir repositorio**

```
# POST /repositories/{id}/like

{
        "id": "2c4b5db5-78cc-4156-94db-ffb60b8c83a8",
        "title": "Rocket Seat Go Stack Desafio Back-end com NodeJS",
        "url": "https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js",
        "techs": [
            "Node.js",
            "ExpressJS",
            "Jest"
        ],
        "likes": 1
    }

```

# Docker

Para baixar a imagem execute o seguinte comando:

```
docker pull andradereginaldo/go_stack_desafio_backend_nodejs
```

Para executar o container execute o seguinte comando::

```
docker run -p 3333:3333 andradereginaldo/go_stack_desafio_backend_nodejs
```

# Testes Funcionais

Para a execução dos testes das rotas da API, com o código fonte baixado, execute o seguinte comando:

```
yarn test
```

</br>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/andraderegis/rocket_seat_go_stack_desafio_backend_com_node_js?style=social">
  </a>
</p>
