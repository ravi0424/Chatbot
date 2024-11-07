#node 
# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the backend port (e.g., 5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]

