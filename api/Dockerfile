FROM node:21-alpine

WORKDIR /app

COPY ./api ./api
COPY ./packages ./packages
COPY ./package.json ./package.json

RUN yarn install
RUN cd /app/packages/database && npx prisma generate
RUN cd api && yarn build