import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import DelayedFlight from './DelayedFlight';
import MainOptions from './MainOptions';
import CalculatorResult from './CalculatorResult';
import ClaimForm from './ClaimForm';
import About from './About';
import YourRights from './YourRights';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/your-rights" component={YourRights} />
        <Route exact path="/" component={MainOptions} />
        <Route path="/delayed-flight" component={DelayedFlight} />
        <Route path="/results" component={CalculatorResult} />
        <Route path="/claim" component={ClaimForm} />
      </div>
    );
  }
}

export default App;
