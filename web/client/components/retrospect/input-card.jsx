import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const CardStyle = styled.div`
    border: 1px solid gray;
    margin: 5px;


`;

export default class InputCard extends React.Component {

    render = () => (
    <CardStyle>
        <input placeholder="What happened?"/>
        <button onClick={() => {
            input.value = '';
        }}> + </button>
    </CardStyle>
    );
}