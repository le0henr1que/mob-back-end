FROM node:latest
# WORKDIR /src
# COPY package*.json ./
# RUN npm install prisma -g
# RUN npm install

# # RUN npx prisma init
# # RUN npx prisma db push
# RUN prisma generate

# COPY . .
# RUN npm run build
# CMD [ "npm", "start" ]


WORKDIR /src

# Instala a CLI do Prisma
RUN npm install prisma -g

# Copia os arquivos do projeto para o diretório de trabalho
# COPY package*.json ./
COPY . .
# Instala as dependências do projeto
RUN npm install

# Gera as definições de modelo do Prisma
RUN npm run build
# RUN sleep 10

RUN npx prisma migrate dev --name migration_deploy
RUN npx prisma migrate deploy
# Inicia o aplicativo
CMD ["npm", "start"]