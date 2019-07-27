import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    username: 'InnaMon'
  }

  manipulateState = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username);
  }

  render () {
    return (
      <div className="App">
      <UserInput 
      type={this.manipulateState}
      userName={this.state.username}/>
      <UserOutput/>
      <UserOutput />
      </div>
    );
  }
}

export default App;
