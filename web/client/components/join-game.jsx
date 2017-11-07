import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const Form = styled.form`
`;

const GameIdField = styled.input`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  font-size: 22px;
  font-weight: 700;
  position: absolute; 
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

const validGameId = id => id.length > 0 && id.length < 5;

export default class JoinGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      gameId: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = event.target.gameId.value;

    if (!validGameId(id)) return;

    this.setState({
      submitted: true,
      gameId: id,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {
          /* Currently just redirecting to a random instance of twoTruths - will */
          this.state.submitted &&
          <Redirect to={`/twoTruthsOneLie/${this.state.gameId}`} />
        }
        <GameIdField
          name="gameId"
          placeholder="Input Game ID"
        />
      </Form>
    );
  }
}
