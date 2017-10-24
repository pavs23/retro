import React from 'react'
import Landing from 'Components/landing'
import TwoTruthsOneLie from 'Components/two-truths'
import GlobalStyles from 'Styles/global'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Root extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/twotruthsonelie" component={TwoTruthsOneLie}/>
        </div>
      </Router>
    )
  }
}
