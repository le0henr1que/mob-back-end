FROM node:latest

WORKDIR /src

RUN npm install prisma -g

COPY . .

RUN npm install

RUN npm run build

# RUN npx prisma db push -y
# RUN npx prisma migrate dev --name migration_deploy
# RUN npx prisma migrate deploy

CMD ["npm", "start"]
