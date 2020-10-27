import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page1 from './components/pages/b2s';
import Page2 from './components/pages/elimination';
import Page3 from './components/pages/interpolation';
import Page4 from './components/pages/differentiation';
import Page5 from './components/pages/integration';
import Page6 from './components/pages/root-finding';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Page1} />
        <Route path='/b2s' exact component={Page1} />
        <Route path='/elimination' component={Page2} />
        <Route path='/interpolation' component={Page3} />
        <Route path='/differentiation' component={Page4} />
        <Route path='/integration' component={Page5} />
        <Route path='/root-finding' component={Page6} />
      </Switch>
    </Router>
  );
}

export default App;
