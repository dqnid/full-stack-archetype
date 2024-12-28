# Use the official Node.js slim image as a base image
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port that the NestJS application runs on
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
