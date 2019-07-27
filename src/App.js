import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    username: 'InnaMon'
  }

  render () {
    return (
      <div className="App">
      <UserInput />
      <UserOutput userName={this.state.username}/>
      <UserOutput />
      </div>
    );
  }
}

export default App;
