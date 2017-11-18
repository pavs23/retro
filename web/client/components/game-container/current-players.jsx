import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PlayerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 10px;
  right: 10px;
  width: 250px;
  height: 350px;
`;

const Player = styled.div`
  width: 95%;
  margin-right: 5%;
  height: 40px;
  font-size: 18px;
  text-align: right;
  font-weight: ${props => (props.isMe ? '700' : '400')};  
  margin-right: 20px;
  margin-top: 10px;
  color: black;
`;

const CurrentPlayers = props => (
  <PlayerContainer>
    {props.players.map(p => <Player key={p.name} isMe={p.isMe}>{p.name}</Player>)}
  </PlayerContainer>
);

CurrentPlayers.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    isMe: PropTypes.bool,
  })).isRequired,
};

export default CurrentPlayers;
