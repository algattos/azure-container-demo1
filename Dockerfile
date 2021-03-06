FROM node:boron

# Create app directory
WORKDIR /usr/src/app

COPY app/ /usr/src/app/
RUN npm install
RUN npm install express --save

EXPOSE 8080
CMD [ "npm", "start" ]