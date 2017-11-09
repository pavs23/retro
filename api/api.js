const Koa = require('koa');

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const gameManager = require('./game-manager');

io.on('connection', (socket) => {
  socket.on('updateGameState', state => gameManager.updateGameState(state));
});

server.listen(3000);
