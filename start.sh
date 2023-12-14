cd ./packages/database && npm install && npm run db:migrate:dev
cd ../../ && docker compose --env-file .env.docker up -d --build
#docker rmi $(docker images -f "dangling=true" -q)
