import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Components/root';
import { injectGlobal } from 'styled-components';

injectGlobal([`
  body {
    margin: 0px;
    font-family: 'Lato', sans-serif;
    color: black;
    text-rendering: optimizeLegibility; 
    -webkit-font-smoothing: antialiased;
    background: #f6f9fc;    
  }
`]);

ReactDOM.render(<Root />, document.getElementById('root'));
