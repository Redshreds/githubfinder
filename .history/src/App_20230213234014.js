import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'> 
        <Navbar title='Github Finder' icon='fab fa-github'/> 
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
