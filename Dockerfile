FROM node:16.15.0-buster

WORKDIR /code

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock

RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]