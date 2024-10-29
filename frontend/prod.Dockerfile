# TODO: multi-stage build
FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node package*.json ./

# TODO: npm ci --omit=dev
RUN npm ci

COPY --chown=node:node . .

RUN npm run build && \
    chown -R node:node .next

USER node

EXPOSE 3000

# TODO: add nginx for serving static files
CMD ["npm", "run", "dev"]