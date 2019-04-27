FROM java:8
VOLUME /tmp
ADD /target/api-gateway-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8762
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]