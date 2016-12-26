import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import {Todo} from './Todo2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Todo ButtonColor="red"/>
        </div>
        <br></br>
      </div>
    );
  }
}



export default App;
