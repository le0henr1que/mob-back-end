# Base image
FROM node:18-alpine 

WORKDIR /app

# Install app dependencies
COPY . .

RUN npm install
# Build the TypeScript code
RUN npm run build


CMD [ "node", "dist/server.js" ]