import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PlayerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 50%;
  transform: translate(0, 50%);
  right: 10px;
  width: 250px;
  height: auto;
`;

const PlayerText = styled.a`
  display: inline-block;
  padding: 0 14px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  font-size: 18px;
  cursor: default;
  font-weight: ${props => (props.isMe ? '700' : '400')};  
  color: black;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  user-select: none;

  &:hover {
    transform: translate(-2%, 0);
  }
`;

const Player = styled.div`
  text-align: right;
  margin-right: 5%;
  width: 100%;
  margin-top: 10px;
`;

const CurrentPlayers = props => (
  <PlayerContainer>
    {props.players.map(p => (
      <Player key={p.name}>
        <PlayerText isMe={p.isMe}>{`${p.name} ${p.mood}`}</PlayerText>
      </Player>
    ))}
  </PlayerContainer>
);

CurrentPlayers.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    isMe: PropTypes.bool,
  })).isRequired,
};

export default CurrentPlayers;
