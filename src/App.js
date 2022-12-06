import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import textLogo from './assets/text-logo.svg'
import Home from './screens/Home'
import CV from './screens/CV'

export default function App() {
  return (
    <Router>
      <header>
        <div>
          <Link to="/">
            <img src={textLogo} alt="Divan logo" width="180" />
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cv">
          <CV />
        </Route>
      </Switch>
    </Router>
  )
}
