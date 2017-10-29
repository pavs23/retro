const Koa = require('koa');

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('nameChange', (payload) => {
    console.log('Received nameChange', payload);
    // TODO: Add Database to maintain game states for all players.
    // At the moment we just log the name change events.
  });
  console.log('Someone connected');
});

server.listen(3000);
