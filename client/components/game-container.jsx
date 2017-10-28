import React from 'react'
import styled from 'styled-components'
 
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
      
const GameId = styled.span`
  font-weight: 400;
`

const GameIndicator = styled.div`
  top: 12px;
  right: 22px;
  font-size: 18px;
  font-weight: 700;
  position: fixed; 
  cursor: pointer;
  user-select: none;
`

const Form = styled.form`
`

const NameField = styled.input`
  top: 12px;
  left: 22px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  position: fixed; 

  &:focus {
    outline: none;
  }
`

export default class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault()
    
    // TODO: Here we want to figure out how to make it known to 
    // the user that their name has been changed for all players,
    // and when this takes effect.
  }

  render() {    
    return (
      <Container>
        <GameIndicator>GameId: <GameId>#dsa87t7</GameId> </GameIndicator>
        <Form onSubmit={this.handleSubmit.bind(this)}>
        <NameField
          name="name"
          placeholder={"Enter Name"}
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        </Form>        
        {this.props.children}
      </Container>
    )
  }
}