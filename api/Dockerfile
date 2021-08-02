FROM node:12

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY ./ /app/

# check files list
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "./app.js" ]