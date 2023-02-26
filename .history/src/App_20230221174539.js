import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import './App.css';

class App extends Component { //React.Fragment will work also, removing the App div from rendering
  render() {
    return (
      <div className='App'> 
        <Navbar />  {/*'Navbar title=' would be a prop a prop*/}

        <Users />
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
