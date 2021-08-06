FROM node:alpine

# create & set working directory
WORKDIR /app

# copy source files
COPY . /app/

# install dependencies
RUN npm install

ENV PORT 5050
ARG DOCKER_ENV

ENV NODE_ENV=${DOCKER_ENV}

ADD . $PORT

# start app
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "start"]