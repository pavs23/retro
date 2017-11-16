import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TwoTruthsOneLie from 'Components/two-truths';
import NameField from 'Components/name-field';
import CurrentPlayers from 'Components/current-players';
import { subscribeToUpdates } from '../sockets';
import GameTypes from '../game-types';
import gameOne from '../mocks/game-states';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GameId = styled.span`
  font-weight: 400;
`;

const GameIndicator = styled.div`
  top: 12px;
  right: 22px;
  font-size: 18px;
  font-weight: 700;
  position: fixed; 
  cursor: pointer;
  user-select: none;
`;

const generateGameId = () => {
  let base = Math.random();
  base *= 10000;
  base = Math.floor(base);
  return base.toString();
};

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      gameId: this.props.gameId,
      gameState: gameOne,
    };
  }

  componentDidMount = () => {
    subscribeToUpdates(this.handleUpdates);
  }

  getGameFromType = () => {
    switch (this.props.gameType) {
      case GameTypes.TWOTRUTHSONELIE:
        return (
          <TwoTruthsOneLie
            updateGameState={this.updateGameState}
            gameState={this.state.gameState}
          />
        );
      default:
        throw new Error('Could not find game: ', this.props.gameType);
    }
  }

  // This is temporary workaround. Game state will be published
  // to API, which will update all clients' gameStates instead.
  updateGameState = (gameState) => {
    console.log(gameState);
    this.setState({ gameState });
  }

  changeName = (userName) => {
    this.setState({ userName });
  }

  handleUpdates = (err, gameState) => {
    this.setState({ ...this.state, gameState });
  }

  render() {
    return (
      <Container>
        <GameIndicator>GameId: <GameId>{this.state.gameId}</GameId> </GameIndicator>
        <NameField changeName={this.changeName} userName={this.state.userName} />
        {this.getGameFromType()}
        <CurrentPlayers players={this.state.gameState.players} />
      </Container>
    );
  }
}

GameContainer.propTypes = {
  gameType: PropTypes.string.isRequired,
  gameId: PropTypes.string,
};

GameContainer.defaultProps = {
  gameId: generateGameId(),
};
