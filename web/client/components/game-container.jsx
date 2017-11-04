import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TwoTruthsOneLie from 'Components/two-truths';
import { subscribeToUpdates, changeName } from '../sockets';
import GameTypes from '../game-types';

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

const Form = styled.form`
`;

const NameField = styled.input`
  top: 12px;
  left: 22px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  position: fixed; 
  color: ${props => (props.value === props.userName ? 'black' : 'grey')};
  
  &:focus {
    outline: none;
  }
`;

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      userName: '',
      gameId: '#dsa87t7',
      gameState: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdates = this.handleUpdates.bind(this);
  }

  componentDidMount() {
    subscribeToUpdates(this.handleUpdates);
  }

  getGameFromType() {
    switch (this.props.gameType) {
      case GameTypes.TWOTRUTHSONELIE:
        return <TwoTruthsOneLie />;
      default:
        throw new Error('Could not find game: ', this.props.gameType);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    changeName(this.state.inputName);
    this.setState({ userName: this.state.inputName });
  }

  handleChange(event) {
    this.setState({ inputName: event.target.value });
  }

  handleUpdates(err, gameState) {
    this.setState({ ...this.state, gameState });
  }

  render() {
    return (
      <Container>
        <GameIndicator>GameId: <GameId>{this.state.gameId}</GameId> </GameIndicator>
        <Form onSubmit={this.handleSubmit}>
          <NameField
            name="name"
            placeholder="Enter Name"
            value={this.state.inputName}
            userName={this.state.userName}
            onChange={this.handleChange}
          />
        </Form>
        {this.getGameFromType()}
      </Container>
    );
  }
}

GameContainer.propTypes = {
  gameType: PropTypes.string.isRequired,
};
