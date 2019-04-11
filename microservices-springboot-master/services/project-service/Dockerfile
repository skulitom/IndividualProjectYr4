FROM java:8
VOLUME /tmp
ADD /target/project-service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8763
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]