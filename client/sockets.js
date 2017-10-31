import io from 'socket.io-client';

// TODO: Set this as part of deployment
const socket = io('http://localhost:3000');

// Refactor this to be a more specific API, so that we can include
// dispatchable events into our components from here.
const dispatch = (event, payload) => {
  socket.emit(event, payload);
};

const subscribeToUpdates = (cb) => {
  socket.on('update', newState => cb(null, newState));
};

const changeName = (newName) => {
  dispatch('changeName', newName);
};

export { subscribeToUpdates, changeName };
