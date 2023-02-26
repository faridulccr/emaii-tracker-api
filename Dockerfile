# Use the official Node.js image as the base image
FROM node:19.6.1

# Set the working directory in the container
WORKDIR /app


# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files into the working directory
COPY . .

# Expose port 3000 
EXPOSE 3000


# Define the entry point for the container
CMD ["npm", "start"]