#Import node
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

FROM nginx

EXPOSE 8080

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

# RUN npm run build 

# CMD [ "npm","start" ]