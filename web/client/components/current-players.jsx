import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 250px;
  height: 350px;
  background-color: #ecf0f1;
`;

const CurrentPlayers = () => <PlayerContainer />;

export default CurrentPlayers;
