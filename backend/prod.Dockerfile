# TODO: multi-stage build
FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node package*.json ./

# TODO: npm ci --omit=dev
RUN npm ci

COPY --chown=node:node . .

RUN npm run build

USER node

EXPOSE 3500

CMD ["npm", "run", "start:prod"]