FROM java:8
VOLUME /tmp
ADD /target/user-service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8764
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]