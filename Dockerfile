# Imagem base para o Node.js
FROM node:14-alpine

# Define o diretório de trabalho para a aplicação
WORKDIR /app

# Copia os arquivos de configuração do projeto para o diretório de trabalho
COPY package*.json tsconfig*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o restante dos arquivos para o diretório de trabalho
COPY . .

# Compila o código TypeScript
RUN npm run build

# Define o comando padrão para executar a aplicação
CMD ["npm", "start"]