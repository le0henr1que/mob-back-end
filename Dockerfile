FROM node:latest

WORKDIR /app

RUN npm install prisma -g

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
