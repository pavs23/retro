FROM node:8.9.0
WORKDIR /usr/src/app
COPY . .
RUN npm install -g yarn
RUN yarn
EXPOSE 5000
CMD ["yarn", "start"]