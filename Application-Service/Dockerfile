#NODE Version
FROM node:12

#CREATE APP DIRECTORY
WORKDIR /home/osboxes/SuperPass/DockerAppService

#Install dependencies
copy package*.json ./
RUN npm install

#Bundle app source
COPY . .

#Bind Port
EXPOSE 9000

#RUN APP
CMD [ "nodejs", "index.js"]