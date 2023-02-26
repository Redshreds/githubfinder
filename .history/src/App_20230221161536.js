import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem'

class App extends Component { //React.Fragment will work also, removing the App div from rendering
  render() {
    return (
      <div className='App'> 
        <Navbar title='Github Finder' />  {/*title is a prop*/}
        <UserItem />
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;
