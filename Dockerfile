# Use the official Node.js image as the base image
FROM node:19.6.1

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
# Copy the package.json and package-lock.json files
COPY package*.json ./
#COPY . .

# Install the application dependencies
RUN npm install

# Expose port 8080 for TCP traffic
EXPOSE 8080


# Define the entry point for the container
CMD ["npm", "start"]