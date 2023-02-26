import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from "axios";
import './App.css';

class App extends Component { //React.Fragment will work also, removing the App div from rendering

  async componentDidMount(){
    const res = await axios.get('https://api.github.com/users');

    console.log(res.data)
  }

  render() {
    return (
      <div className='App'> 
        <Navbar />  {/*'Navbar title=' would be a prop*/}
        <div className='container'>
          <Users />
        </div>
        
      </div>
    );
  }
}
//  In JSX, content must exist in ONE parent Element!
export default App;


//class based components without State should be converted to functions. Hooks allow functions to have state