FROM node:18-bullseye

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . /app
RUN npx tsc --project tsconfig.json

CMD ["npx", "http-server", "-p", "8080", "-c-1"]
