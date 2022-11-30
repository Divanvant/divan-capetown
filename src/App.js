import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './screens/Home'
import textLogo from './assets/text-logo.svg'

export default function BasicExample() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">
            <img src={textLogo} alt="Divan logo" width="180" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cv">
            Nothing here for now
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
