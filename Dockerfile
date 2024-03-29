FROM postgres as db_bemol

EXPOSE 5432

WORKDIR /usr/src/app/db


FROM node:15.11.0-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn dev:server
