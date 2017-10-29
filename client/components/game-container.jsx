import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { subscribeToUpdates, dispatch } from '../sockets';

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdates = this.handleUpdates.bind(this);
  }

  componentDidMount() {
    subscribeToUpdates(this.handleUpdates);
  }

  handleUpdates(err, newState) {
    // TODO - Perform State Reconciliation. Currently just logging a
    // newState to keep eslint happy.
    console.log(newState);
    this.setState({});
  }

  handleChange(event) {
    this.setState({ inputName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    dispatch('nameChange', this.state.inputName);
    this.setState({ userName: this.state.inputName });
    // TODO: Here we want to figure out how to make it known to
    // the user that their name has been changed for all players,
    // and when this takes effect.
  }

  render() {
    return (
      <Container>
        <GameIndicator>GameId: <GameId>#dsa87t7</GameId> </GameIndicator>
        <Form onSubmit={this.handleSubmit}>
          <NameField
            name="name"
            placeholder="Enter Name"
            value={this.state.inputName}
            userName={this.state.userName}
            onChange={this.handleChange}
          />
        </Form>
        {this.props.children}
      </Container>
    );
  }
}

GameContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
