#NODE Version
FROM node:12

#CREATE APP DIRECTORY
WORKDIR /home/osboxes/SuperPass/DockerAppUI

#Install dependencies
copy package*.json ./
RUN npm install

#Bundle app source
COPY . .

#Bind Port
EXPOSE 3000

#RUN APP
CMD [ "npm", "start"]