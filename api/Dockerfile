FROM node:boron
WORKDIR /usr/src/api
COPY . .
RUN npm install -g yarn
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]