import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Navigation from './pages/navigation'
import Home from './pages/home';
import Portfolio from './pages/projects';
import Contact from './pages/contact';
import Footer from './pages/footer'


import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <Navigation />
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/" />
        </Switch>
        <Footer />

      </>
    );
  }
  
}

export default App;
