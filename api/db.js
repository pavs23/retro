const mongo = require('mongodb').MongoClient;

// Currently considering whether names should form part of the
// game state or whether we want to handle them separately.
//
// At the moment this just tests to test if db accepts updates.

const updateGameState = () => {
  mongo.connect('mongodb://mongodb:27017/retro', (err, db) => {
    if (err) throw err;
    db.collection('games').update(
      { gameId: 'abc123' },
      { gameId: 'abc123', gameType: 'twoTruthsOneLie' },
      { upsert: true }
    );
    db.close();
  });
};

const updateName = (name) => {
  mongo.connect('mongodb://mongodb:27017/retro', (err, db) => {
    if (err) throw err;
    db.collection('names').update(
      { userId: 0 },
      { userId: 0, name },
      { upsert: true }
    );
    db.close();
  });
};

module.exports = { updateGameState, updateName };
