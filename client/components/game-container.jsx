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

const NameField = styled.input`
  top: 12px;
  left: 22px;
  font-size: 18px;
  font-weight: 700;
  position: fixed; 
`

export default class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {    
    return (
      <Container>
        <GameIndicator>GameId: <GameId>#dsa87t7</GameId> </GameIndicator>
        <NameField
          key="123"
          placeholder={"Enter Name"}
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        {this.props.children}
      </Container>
    )
  }
}