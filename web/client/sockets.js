import io from 'socket.io-client';

// Currently this connection happens irrespective of which
// state the app is in. We probably want to only instantiate
// this when it is actually needed.
const socket = io('http://localhost:3000');

// Refactor this to be a more specific API, so that we can
// include dispatchable events into our components from here.
const dispatch = (event, payload) => {
  socket.emit(event, payload);
};

const subscribeToUpdates = (cb) => {
  socket.on('update', newState => cb(null, newState));
};

const changeName = (newName) => {
  dispatch('changeName', newName);
};

// Sends a complete game state to server. Server will perform
// reconcilliation and ensure that everyone participating
// have the same information.
const updateGameState = (newState) => {
  dispatch('updateGameState', newState);
};

export { subscribeToUpdates, changeName, updateGameState };
