FROM openjdk:8
ADD target/db-service.jar db-service.jar
EXPOSE 8090
ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongo/test", "-Djava.security.egd=file:/dev/./urandom","-jar","/db-service.jar"]