FROM node:21

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./web/package*.json ./web/
COPY ./package.json .
COPY ./packages ./packages/

# Install app dependencies
RUN yarn install
RUN cd ./packages/shared && yarn db:generate

COPY ./web ./web/

WORKDIR /app/web

CMD [ "yarn", "run", "dev" ]
