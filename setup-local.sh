#!/usr/bin/env bash

echo "::::: SETUP STARTED :::::"

cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env

docker-compose build --force-rm --no-cache

docker-compose up --force-recreate -d

docker exec -i medcloud-db sh -c 'mysql -u root -proot' <<< "create database medcloud;"

docker exec -it medcloud-frontend npm install

docker exec -it medcloud-backend npm install

docker exec -it medcloud-backend npm install -g sequelize-cli

docker exec -it medcloud-backend npx sequelize-cli db:migrate

docker-compose down

echo "::::: SETUP COMPLETED :::::"
