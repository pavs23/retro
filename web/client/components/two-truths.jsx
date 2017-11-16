import React from 'react';
import styled from 'styled-components';
import Card from 'Components/card';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  width: 600px;
  height: 70%;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0%);
  position: absolute;
  display: flex;
  flex-direction: column;
`;

class TwoTruthsOneLie extends React.Component {
  updateFact = (index, fact) => {
    if (index > 3 || index < 0) throw new Error('Unexpected number of facts.');
    const newGameState = this.props.gameState;
    newGameState.facts[index] = fact;
    this.props.updateGameState(newGameState);
  }

  handleSelect = (index) => {
    const newFacts = [...this.props.gameState.facts];
    newFacts[index].selected = true;
    this.props.updateGameState({
      ...this.props.gameState,
      facts: newFacts,
    });
  }

  render = () => (
    <CardContainer>
      <Card
        selected={this.props.gameState.facts[0].selected}
        index={0}
        updateFact={this.updateFact}
        handleSelect={this.handleSelect}
      />
      <Card
        selected={this.props.gameState.facts[1].selected}
        index={1}
        updateFact={this.updateFact}
        handleSelect={this.handleSelect}
      />
      <Card
        selected={this.props.gameState.facts[2].selected}
        index={2}
        updateFact={this.updateFact}
        handleSelect={this.handleSelect}
      />
    </CardContainer>
  );
}

TwoTruthsOneLie.propTypes = {
  gameState: PropTypes.shape({
    facts: PropTypes.arrayOf(PropTypes.shape({
      selected: PropTypes.bool,
      value: PropTypes.string,
    })),
  }),
  updateGameState: PropTypes.func.isRequired,
};

TwoTruthsOneLie.defaultProps = {
  gameState: {
    facts: [],
  },
};

export default TwoTruthsOneLie;
