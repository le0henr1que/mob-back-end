FROM node:latest
WORKDIR /src
COPY package*.json ./
RUN npm install
RUN npx prisma init
RUN npx prisma db push
RUN npx prisma generate
COPY . .
RUN npm run build
CMD [ "npm", "start" ]