FROM node:12

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 7700
CMD npm run start