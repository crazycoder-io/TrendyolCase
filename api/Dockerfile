FROM node:12

RUN heroku addons:create mongolab:sandbox

# create root application folder
WORKDIR /app

# copy source code to /app/src folder
COPY ./ /app/

RUN npm install

# check files list
RUN ls -a

EXPOSE 5000

CMD [ "node", "index.js" ]