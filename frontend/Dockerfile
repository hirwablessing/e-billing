FROM node:16-alpine

#specifying the working directory
WORKDIR /usr/app

#copy package.json to the working directory
COPY ./package.json .

# Update npm
RUN npm install -g npm@8.5.5

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15

COPY /build/ /usr/share/nginx/html

EXPOSE 80
# RUN npm run build 

# CMD [ "npm","start" ]