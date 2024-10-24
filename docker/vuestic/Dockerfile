# Use Node.js official image for building the app
FROM node:18-alpine AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js app
RUN npm run build

# Use Nginx as the base image for the production stage
FROM nginx:alpine AS production-stage

# Copy the built files from the previous stage to the Nginx web root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
