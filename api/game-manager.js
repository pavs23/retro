const db = require('./db');

const updateGameState = (state) => {
  db.upsertGameState(state);
};

const getGameState = () => {};

module.exports = {
  updateGameState,
  getGameState,
};
