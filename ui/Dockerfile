FROM node:fermium-buster as builder

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

FROM node:fermium-alpine as production

WORKDIR /home/node/app

RUN npm install -g serve
COPY --from=builder /home/node/app/build build

ENTRYPOINT ["serve", "-s", "build"]
