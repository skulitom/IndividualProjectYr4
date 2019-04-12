echo 'Building Project...'
mvn clean compile
mvn package
echo 'Docker Composing'
docker-compose up