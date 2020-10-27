import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Page1} />
        <Route path='/page1' exact component={Page1} />
        <Route path='/commathproject' exact component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route path='/page4' component={Page4} />
        <Route path='/page5' component={Page5} />
        <Route path='/page6' component={Page6} />
      </Switch>
    </Router>
  );
}

export default App;
