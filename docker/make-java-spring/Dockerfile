# Use a base image with Maven and JDK
FROM maven:3.9.4-eclipse-temurin-17 AS builder

# Set the working directory
WORKDIR /app

# Create Maven directories for the downloaded plugin
RUN mkdir -p /root/.m2/repository/org/apache/maven/plugins/maven-clean-plugin/3.2.0

# Download the Maven Clean Plugin directly from Maven Central using curl
RUN curl -o /root/.m2/repository/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.jar \
    https://repo1.maven.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.jar

# Download the POM file for the plugin
RUN curl -o /root/.m2/repository/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.pom \
    https://repo1.maven.org/maven2/org/apache/maven/plugins/maven-clean-plugin/3.2.0/maven-clean-plugin-3.2.0.pom

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
