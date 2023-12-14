cd ./packages/database && npm install && npm run db:migrate:dev
docker compose --env-file .env.docker up -d --build