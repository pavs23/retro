import React from 'react'
import styled from 'styled-components'

export default class Landing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render() {

    const Container = styled.div`
      position: relative;
      width: 100%;
      height: 100%;
      color: #007AFF;
    `

    const WelcomeBox = styled.div`
      position: absolute;
      width: 100%;      
      top: ${ this.state.started ? '0%' : '40%'};
    `

    const WelcomeMessage = styled.p`
      position: relative;
      color: black;
      text-align: center;
      font-size: 64px;
    `

    const GetStartedButton = styled.button`
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 200px;
      height: 40px;
      border: none;
      cursor: pointer;
      color: inherit;
      background-color: #fff;
      text-align: center;
      text-decoration: none;
      font-size: 22px;
    `

    const GamesList = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 200px;
    `

    const Game = styled.div`
      width: 100%;
      margin: 15px;
      font-size: 32px;
      cursor: pointer;
      text-align: center;
    `

    const DisabledGame = Game.extend`
      cursor: default;
      color: #999;
    `

    return (
      <Container>
        <WelcomeBox>

          <WelcomeMessage>Retro</WelcomeMessage>

          {
            this.state.started || (
              <GetStartedButton onClick={this.start.bind(this)}>
                Get Started
              </GetStartedButton>
            )
          }

          {
            this.state.started && (
              <GamesList>
                <Game onClick={() => {window.location.href = '/twotruthsonelie'}}>Two truths - One Lie</Game>
                <DisabledGame>Impersonator</DisabledGame>             
              </GamesList>
            )
          }

        </WelcomeBox>
      </Container>
    )
  }

  start(){
    this.setState({started: true})
  }

}