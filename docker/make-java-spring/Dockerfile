# Stage 1: Build the application with Maven
FROM eclipse-temurin:17-jdk AS build

# Set a working directory
WORKDIR /app

# Copy the Maven project files
COPY pom.xml ./
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Create a lightweight image with only the JAR file
FROM openjdk:17-jdk-slim

# Set a working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
