# TODO: multi-stage build
FROM node:22-alpine

WORKDIR /app

USER node

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]