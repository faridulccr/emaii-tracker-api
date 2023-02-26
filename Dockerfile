bashCopy code
# Use the official Node.js image as the base image
FROM node:19

# Set the working directory in the container
WORKDIR /emaii-tracker-api

# Copy the application files into the working directory
COPY . /emaii-tracker-api

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]