echo 'Making Mount for Docker'
mkdir -p ${HOME}/jars
echo 'Building Project...'
mvn clean package -DskipTests
echo 'Docker Composing'
docker-compose up