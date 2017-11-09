const mongo = require('mongodb').MongoClient;

const upsertGameState = (gameState) => {
  mongo.connect('mongodb://mongodb:27017/retro', (err, db) => {
    if (err) throw err;
    db.collection('games').update(
      { gameId: gameState.gameId },
      { gameState },
      { upsert: true },
    );
    db.close();
  });
};

module.exports = { upsertGameState };
