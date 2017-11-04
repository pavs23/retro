const Koa = require('koa');

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const db = require('./db.js');

const changeName = (name) => {
  console.log('Change name event.');
  db.updateName(name);
};

const updateGameState = (state) => {
  console.log('Update game event.');
  db.updateGameState(state);
};

io.on('connection', (socket) => {
  socket.on('changeName', name => changeName(name));
  socket.on('updateGameState', state => updateGameState(state));
});

server.listen(3000);
