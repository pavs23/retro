import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TwoTruthsOneLie from 'Components/two-truths/two-truths';
import NameField from 'Components/game-container/name-field';
import CurrentPlayers from 'Components/game-container/current-players';
import { subscribeToUpdates } from '../../sockets';
import GameTypes from '../../game-types';
import gameOne from '../../mocks/game-states';

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

const generateGameId = () => Math.floor(Math.random() * 10000).toString();

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: this.props.gameId,
      gameState: gameOne,
    };
  }

  componentDidMount = () => subscribeToUpdates(this.handleUpdates);

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
  updateGameState = gameState => this.setState({ gameState });
  handleUpdates = (err, gameState) => this.setState({ ...this.state, gameState });

  changeName = (userName) => {
    const players = [...this.state.gameState.players];
    if (players.every(x => x.name !== userName)) {
      const myIndex = players.findIndex(p => p.isMe);
      players[myIndex].name = userName;
      players[myIndex].mood = '🤔';
      this.setState({
        players,
      });
    }
  }


  render() {
    return (
      <Container>
        <GameIndicator>GameId: <GameId>{this.state.gameId}</GameId> </GameIndicator>
        <NameField
          changeName={this.changeName}
          userName={this.state.gameState.players.find(p => p.isMe).name}
        />
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
