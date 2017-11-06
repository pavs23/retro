import React from 'react';
import Landing from 'Components/landing';
import GameContainer from 'Components/game-container';
import JoinGame from 'Components/join-game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameTypes from '../game-types';

// There's definitely a better of way of doing this.
const TwoTruthsContainer = () => (
  <GameContainer
    gameType={GameTypes.TWOTRUTHSONELIE}
  />
);


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/twotruthsonelie" component={TwoTruthsContainer} />
      <Route path="/twotruthsonelie/a" component={TwoTruthsContainer} />
      <Route path="/join" component={JoinGame} />
    </div>
  </Router>
);

export default Root;
