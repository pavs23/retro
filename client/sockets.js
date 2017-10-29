import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function subscribeToUpdates(cb) {
  socket.on('update', timestamp => cb(null, timestamp));
}

// Refactor this to be a more specific API, so that we can include
// dispatchable events into our components from here.
function dispatch(event, payload) {
  socket.emit(event, payload);
}

export { subscribeToUpdates, dispatch };
