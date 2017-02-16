FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app/package.json /usr/src/app/
COPY app/server.js /usr/src/app/
RUN npm install
RUN npm install express --save

EXPOSE 8080
CMD [ "npm", "start" ]