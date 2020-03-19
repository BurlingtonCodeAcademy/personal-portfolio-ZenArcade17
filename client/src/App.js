import React from 'react'
import './App.css';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Interests from './Interests'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/portfolio'} component={Portfolio} />
        <Route path={'/interests'} component={Interests} />
      </Switch>
    </div>
  );
}

export default App
