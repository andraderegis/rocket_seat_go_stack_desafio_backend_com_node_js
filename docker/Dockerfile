FROM node:12.20.1-alpine3.10
WORKDIR /go_stack_desafio_nodejs
COPY ./src package.json ./

RUN yarn install

EXPOSE 3333

ENTRYPOINT [ "yarn", "start" ]
