# Use the official Nginx image as the base image
FROM nginx:alpine

# Set working directory to /usr/share/nginx/html (the default directory where Nginx serves files)
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the static Bootstrap Dashboard files from your host machine to the container
COPY ./bootstrap-dashboard/ .

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
