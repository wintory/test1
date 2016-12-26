import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import {Todo} from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Todo ButtonColor="red"/>
        </div>
        <br></br>
        <div className="App-header">
          <Todo ButtonColor="green"/>
        </div>
      </div>
    );
  }
}



export default App;
