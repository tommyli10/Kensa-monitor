# Specify a base image to start with, here we selected alpine version of node
FROM node:16.13
# Create a working directory inside the container
WORKDIR /usr/src/app

COPY ./package.json .
# Install all dependencies
RUN npm install
# Copy over all the source file to docker
COPY . /usr/src/app

EXPOSE 3000

CMD npm start