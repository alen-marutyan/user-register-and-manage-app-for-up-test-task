# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
