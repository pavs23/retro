import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputCard from './input-card';

const LaneStyle = styled.div`
  width: 200px;
  height: 70%;
  top: 30%;
  transform: translate(0%, 0%);
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid #007AFF;
  border-radius: 5px;
  float: left;
  margin: 10px;
  text-align: center;
  color: #000000;
`;



export default class LaneComponent extends React.Component {

    render = () => (
        <LaneStyle>
            {this.props.heading}
                {<InputCard/>}
        </LaneStyle>
    );
}
