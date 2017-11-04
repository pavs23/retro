FROM node:boron
WORKDIR /usr/src/app
COPY . .
RUN npm install -g yarn
RUN yarn
EXPOSE 5000
CMD ["yarn", "start"]