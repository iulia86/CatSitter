import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DespreNoi from './components/pages/DespreNoi';
import Servicii from './components/pages/Servicii';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={DespreNoi} />
          <Route path='/products' component={Servicii} />
          <Route path='/sign-up' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
