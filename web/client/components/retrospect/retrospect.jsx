import React from 'react';
import styled from 'styled-components';
import LaneComponent from './lane-container'

const PageContainer = styled.div`
    position: relative;
    left: 10px;
`;

export default class Retrospect extends React.Component {
    render = () => (
        <PageContainer>   
            <LaneComponent heading="What went well?"/>
            <LaneComponent heading="What didn't go well?"/>
            <LaneComponent heading="What can we do better?"/>
        </PageContainer>
        
    );
}