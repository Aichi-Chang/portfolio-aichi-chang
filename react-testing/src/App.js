import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tachyons'

import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'




function App() {
  return (
    <div className='vw-100'>
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
