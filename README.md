docker run --name bdMincraft -p 3306:3306 -e MYSQL_ROOT_PASSWORD=unmatched -d mysql:latest

yarn typeorm migration:run
npm run typeorm migration:run
