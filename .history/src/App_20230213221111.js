import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'John Doe';

    return React (
      <div className="App"> 
        <h1>Hello from {name}</h1> 
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
