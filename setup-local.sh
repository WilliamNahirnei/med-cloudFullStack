#!/usr/bin/env bash

echo "::::: SETUP STARTED :::::"

cp ./backend/.env.example ./backend/.env

docker-compose build --force-rm --no-cache

docker-compose up --force-recreate -d

docker exec -i medcloud-db sh -c 'mysql -u root -proot' <<< "create database medcloud;"

docker exec -it medcloud-backend npm install
docker-compose down

echo "::::: SETUP COMPLETED :::::"
