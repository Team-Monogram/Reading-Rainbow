FROM node:14.15.4-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

EXPOSE 3000

CMD ["node", "./src/server.js"]