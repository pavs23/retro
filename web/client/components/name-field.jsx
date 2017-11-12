import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
`;

const Field = styled.input`
  top: 12px;
  left: 22px;
  border: none;
  font-size: 28px;
  font-weight: 700;
  position: fixed; 
  color: ${props => (props.value === props.userName ? 'black' : 'grey')};
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

export default class NameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeName(this.state.inputName);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Field
          name="name"
          placeholder="Enter Name"
          value={this.state.inputName}
          userName={this.props.userName}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

NameField.propTypes = {
  userName: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
};
