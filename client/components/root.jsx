import React from 'react';
import Landing from 'Components/landing';
import TwoTruthsOneLie from 'Components/two-truths';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/twotruthsonelie" component={TwoTruthsOneLie} />
    </div>
  </Router>
);

export default Root;
