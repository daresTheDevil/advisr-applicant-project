FROM node:lts-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install -g http-server

RUN npm install -g esbuild --unsafe-perm=true

RUN npm run build

CMD [ "http-server", "dist" ]