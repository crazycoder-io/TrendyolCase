FROM node:12

# create root application folder
WORKDIR /app

# copy source code to /app/src folder
COPY ./ /app/

RUN npm install

# check files list
RUN ls -a

EXPOSE 5000

CMD [ "node", "index.js" ]