# FROM node:carbon

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 8080
# CMD [ "npm", "start" ]

FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY server/dist /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]