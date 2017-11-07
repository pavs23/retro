import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  height: 100px;
  width: 100%;
  margin: 10px;
  background-color: ${props => (props.selected ? '#e74c3c' : 'white')};
  box-shadow: 0 2px 4px rgba(50, 50, 93, .1);
  text-shadow: 0 1px 3px rgba(50,50,93,.11);  
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
`;

const FactField = styled.input`
  top: 50%;
  left: 22px;
  transform: translate(0, -50%);
  border: none;
  font-size: 22px;
  font-weight: 700;
  position: relative; 
  color: ${props => (props.selected ? 'white' : 'black')};    
  background-color: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.selected ? '#fefefe' : 'grey')};        
  }
`;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFact: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFactSubmit = this.handleFactSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputFact: event.target.value });
  }

  handleFactSubmit(event) {
    event.preventDefault();
    this.props.updateFact(this.props.index, this.state.inputFact);
  }

  render() {
    return (
      <StyledCard
        selected={this.props.selected}
        onClick={this.props.handleSelect}
      >
        <Form onSubmit={this.handleFactSubmit}>
          <FactField
            name="name"
            placeholder="Submit fact here..."
            value={this.state.inputFact}
            onChange={this.handleChange}
            selected={this.props.selected}
          />
        </Form>
      </StyledCard>
    );
  }
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  updateFact: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func,
};

Card.defaultProps = {
  selected: false,
  handleSelect: () => {},
};
