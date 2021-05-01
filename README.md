docker run --name bdMincraft -p 3306:3306 -e MYSQL_ROOT_PASSWORD=unmatched -d mysql:latest

Rodar no mysql
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'unmatched'
flush privileges;
CREATE DATABASE minecraftable








yarn typeorm migration:run
npm run typeorm migration:run
