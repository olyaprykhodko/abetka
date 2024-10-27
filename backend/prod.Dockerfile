# TODO: multi-stage build
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 3500

USER node

CMD ["npm", "run", "start:dev"]