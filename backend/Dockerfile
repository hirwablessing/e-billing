FROM node:16-alpine

#specifying the working directory
WORKDIR /usr/app

#copy package.json to the working directory
COPY ./package.json .

RUN yarn install

COPY . .

RUN npx prisma migrate dev

EXPOSE 8000

# RUN the built file
CMD [ "node","dist/index.js" ]]