import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Components/root';
import { injectGlobal } from 'styled-components';

injectGlobal([`
  body {
    margin: 0px;
    font-family: 'Lato', sans-serif;
    color: black;
    text-shadow: 0 1px 3px rgba(50,50,93,.11);  
    text-rendering: optimizeLegibility; 
    -webkit-font-smoothing: antialiased;
  }
`]);

ReactDOM.render(<Root />, document.getElementById('root'));
