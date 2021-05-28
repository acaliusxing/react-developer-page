import React, { Component } from 'react';

import Main from './main';
import About from './about';
import Summary from './summary';
import Projects from './projects';
import Contact from './contact';

class Home extends Component {

  render() {
    return (
      <>
        <Main />
        <About />
        <Summary />
        <Projects />
        <Contact />
      </>
    );
  }
  
}

export default Home;
