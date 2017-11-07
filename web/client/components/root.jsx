import React from 'react';
import Landing from 'Components/landing';
import PropTypes from 'prop-types';
import GameContainer from 'Components/game-container';
import JoinGame from 'Components/join-game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameTypes from '../game-types';

// There's definitely a better of way of doing this.
const TwoTruthsContainer = ({ match }) => (
  <GameContainer
    gameType={GameTypes.TWOTRUTHSONELIE}
    gameId={match.params.id}
  />
);

TwoTruthsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

TwoTruthsContainer.defaultProps = {
  match: undefined,
};

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/twotruthsonelie/:id?" component={TwoTruthsContainer} />
      <Route path="/join" component={JoinGame} />
    </div>
  </Router>
);

export default Root;
