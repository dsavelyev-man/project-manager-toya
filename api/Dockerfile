FROM node:21 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./api/package*.json ./api/
COPY ./package.json .
COPY ./packages ./packages/

# Install app dependencies
RUN yarn install
RUN cd ./packages/shared && yarn db:generate

COPY ./api ./api/

RUN cd ./api && yarn run build

FROM node:21

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/api/package*.json ./
COPY --from=builder /app/api/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
