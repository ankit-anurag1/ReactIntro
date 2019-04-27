import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    );
  }
}

export default App;
