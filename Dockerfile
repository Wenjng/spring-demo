FROM adoptopenjdk/openjdk11:ubi
VOLUME /tmp

COPY target/*.jar spring-demo.jar

ENTRYPOINT ["java", "-jar", "spring-demo.jar"]