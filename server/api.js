const Koa = require('koa');

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

const changeName = () => {
  console.log('Change name event.');
};

const updateGameState = () => {
  console.log('Update game event.');
};

io.on('connection', (socket) => {
  socket.on('changeName', payload => changeName(payload));
  socket.on('updateGameState', payload => updateGameState(payload));
});

server.listen(3000);
