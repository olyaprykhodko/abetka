# TODO: multi-stage build
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --chown=node:node . .

USER node

RUN npm run build

EXPOSE 3500

CMD ["npm", "run", "start:dev"]