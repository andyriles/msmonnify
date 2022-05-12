FROM node:16.15.0-buster

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]