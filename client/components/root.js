import React from 'react'
import Example from 'Components/example'
import AnotherOne from 'Components/another-one'

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
          <Route exact path="/" component={Example}/>
          <Route path="/anotherOne" component={AnotherOne}/>
        </div>
      </Router>
    )
  }
}
