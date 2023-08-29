FROM node:18
LABEL org.opencontainers.image.source https://github.com/pb-coding/voltvector-fe

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]