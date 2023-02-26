# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR ./

# Copy the application files into the working directory
COPY . ./

# Install the application dependencies
RUN npm install

# Expose port 8080 for TCP traffic
# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]