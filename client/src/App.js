import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Interests from './Interests'
import Footer from './Footer'

function App() {
  return (
    <div id='main'>
      <Header />
      <div id='content'>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/projects'} component={Projects} />
          <Route path={'/interests'} component={Interests} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App
