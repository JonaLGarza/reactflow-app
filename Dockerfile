
# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy app files
COPY . .

# Expose port and run
EXPOSE 5173
CMD ["yarn", "dev", "--host"]
