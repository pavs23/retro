import React from 'react'
import styled from 'styled-components'
 
export default class GameContainer extends React.Component {

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

    return (
      <Container>
        <GameIndicator>GameId: <GameId>#dsa87t7</GameId> </GameIndicator>
        {this.props.children}
      </Container>
    )
  }

}