# Use a base image (e.g., a web server image)
FROM nginx:latest

# Create a directory in the container to store your files
WORKDIR /usr/share/nginx/html

# Copy individual files one-by-one
COPY . .

# Expose port 80 for serving the web application
EXPOSE 80


