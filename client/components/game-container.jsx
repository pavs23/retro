import React from 'react'
import styled from 'styled-components'
 
export default class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: undefined
    }
  }

  render() {
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

    const NameField = styled.div`
      top: 12px;
      left: 22px;
      font-size: 18px;
      font-weight: 700;
      position: fixed; 
      cursor: pointer;
      user-select: none;
    `

    const NameEntry = NameField.extend`
      color: #999;
    `
    
    return (
      <Container>
        <GameIndicator>GameId: <GameId>#dsa87t7</GameId> </GameIndicator>
        {
          this.state.name != undefined 
            ? <NameField>{this.state.name}</NameField>
            : <NameEntry>Enter Name</NameEntry>
        }
        {this.props.children}
      </Container>
    )
  }
}