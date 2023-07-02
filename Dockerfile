# Base image
FROM node:18-alpine as base

FROM base as deps

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY src ./src

# Build the TypeScript code
RUN npm run build

CMD [ "node", "dist/server.js" ]