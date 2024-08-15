FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Agrega node_modules/.bin al PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000