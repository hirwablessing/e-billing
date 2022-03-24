FROM node:16-alpine
#specifying the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY ./package.json .

RUN yarn install

COPY . .

RUN npx prisma migrate dev

EXPOSE 8000

CMD [ "yarn", "dev" ]