# Use version 4.2.0 LTS
FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Open Express/SocketIO port
EXPOSE 8080

# Start according to package.json
CMD [ "npm", "start" ]
