import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component { //React.Fragment will work also, removing the App div from rendering
  render() {
    return (
      <div className='App'> 
        <Navbar /> 
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
