# Use Node.js 20 slim as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files from the backend directory
COPY Docdesk-backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code
COPY Docdesk-backend/ .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
