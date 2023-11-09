# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./bbuddy-website-react/package*.json ./

# Install dependencies
#RUN npm ci --production
RUN npm install

# Copy the rest of the app's source code to the container
COPY ./bbuddy-website-react .

# Build the React app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]