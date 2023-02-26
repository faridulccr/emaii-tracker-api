# Use the official Node.js image as the base image
FROM node:19.6.1

# Set the working directory in the container
WORKDIR /usr/app

# Copy the package.json and package-lock.json files
COPY ["package.json", "package-lock.json*", "./"]

# Install the application dependencies
RUN npm install --production

# Copy the application files into the working directory
COPY . .

# Expose port 8080 
EXPOSE 8080

# Define the entry point for the container
CMD ["node", "index.js"]