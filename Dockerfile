FROM node:18-alpine

WORKDIR /temp/apps

COPY package.json package-lock.json /temp/apps/

RUN npm install

RUN npm install pm2@latest -g

COPY . /temp/apps/

# TODO: Gunakan PM2 Process Manager
# CMD ["pm2", "start", "'npm run start'"]

CMD ["node", "index.js"]










