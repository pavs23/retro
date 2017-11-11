import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PlayerContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 250px;
  height: 350px;
  background-color: #ecf0f1;
`;

const Player = styled.div`
  width: 100%;
  height: 30px;
  color: black;
`;

const CurrentPlayers = props => (
  <PlayerContainer>
    {props.players.map(() => <Player />)}
  </PlayerContainer>
);

CurrentPlayers.propTypes = {
  players: PropTypes.string.isRequired,
};

export default CurrentPlayers;
