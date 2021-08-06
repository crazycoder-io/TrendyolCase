FROM node:12

# create & set working directory
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 5050
CMD ["npm", "start"]