import React, { Component } from 'react';
import Header from './components/header/header';
import Login from './components/login/login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <h1 className="App-title">Welcome back!</h1>
        </header>
        <div className="App-intro">
            <Login/>
        </div>

      </div>
    );
  }
}

export default App;
