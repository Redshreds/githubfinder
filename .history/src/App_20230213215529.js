import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        { <h1>Hello from React</h1>  /*In JSX, must exist in ONE parent Element! */}
      </div>
    );
  }
}

export default App;
