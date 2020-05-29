Added Dockerfile 
run local:

docker build -t spring-demo .
dcoker run -p 8080:8080 spring-demo

curl http://localhost:8080/actuator/