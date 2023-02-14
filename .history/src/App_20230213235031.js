import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    const numbers = [1,2,3,4];


    return (
      <div className='App'> 
        <Navbar title={numbers}/> 
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
