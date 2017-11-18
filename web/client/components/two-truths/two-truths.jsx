import React from 'react';
import styled from 'styled-components';
import Card from 'Components/two-truths/card';
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

const Wrapper = styled.div``;

const SubmitButton = styled.a`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 8px;
  padding: 0 14px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .025em;
  color: #34495e;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  transition: all .15s ease;

  &:hover {
    transform: translate(-50%, -2%);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
`;

class TwoTruthsOneLie extends React.Component {
  updateFact = (index, fact) => {
    if (index > 3 || index < 0) throw new Error('Unexpected number of facts.');
    const newGameState = this.props.gameState;
    newGameState.facts[index] = fact;
    this.props.updateGameState(newGameState);
  }

  handleSelect = (index) => {
    const newFacts = this.props.gameState.facts.map(f => ({ ...f, selected: false }));
    newFacts[index].selected = true;
    this.props.updateGameState({
      ...this.props.gameState,
      facts: newFacts,
    });
  }

  render = () => (
    <Wrapper>
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
      <SubmitButton>Submit Facts</SubmitButton>
    </Wrapper>
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
