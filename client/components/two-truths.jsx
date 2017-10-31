import React from 'react';
import GameContainer from 'Components/game-container';
import styled from 'styled-components';

const Fact = styled.div`
  height: 100px;
  width: 400px;
  background-color: black;
`;

const FactContainer = styled.div`
  width: 600px;
  height: 100%;
`;

class TwoTruthsOneLie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: null,
    };
  }
  render() {
    return (
      <GameContainer>
        <FactContainer>
          <Fact>{this.state.facts}</Fact>
        </FactContainer>
      </GameContainer>
    );
  }
}

export default TwoTruthsOneLie;
