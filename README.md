# Retro 
Interactive sprint retro games for agile teams. Game state updates will happen through web sockets, and maintained through a db on the server.

Scoped for initial release:
* KALM
* Two Truths, One Lie
* Impersonator

## Running
The Mongodb connection currently only works when running the Docker configuration. It can be reconfigured in `api/db.js`.
### Web App
Developer Environment
```
yarn
yarn run dev
```
Production Environment
```
yarn
yarn start
```
### Api
```
yarn 
yarn start
```
### Docker Compose
```
docker-compose build
docker-compose up
```
