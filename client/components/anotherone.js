import React from 'react'
import styled from 'styled-components';

export default class AnotherOne extends React.Component {

  render() {
    const StyledDiv = styled.div`
      font-size: 48px;
    `
    
    return <StyledDiv>Another One</StyledDiv>
  }
}