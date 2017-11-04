import React from 'react';
import Landing from 'Components/landing';
import GameContainer from 'Components/game-container';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameTypes from '../game-types';

// There's definitely a better of way of doing this.
const TwoTruthsContainer = () =>
  <GameContainer gameType={GameTypes.TWOTRUTHSONELIE} />;

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/twotruthsonelie" component={TwoTruthsContainer} />
    </div>
  </Router>
);

export default Root;
