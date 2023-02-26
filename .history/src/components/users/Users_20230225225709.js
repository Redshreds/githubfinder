import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

//Results in showing user.item over and over because of it using State.
//   render() {
//     return (
//       <div>
//         {this.state.users.map(user => ( 
//             <UserItem key={user.id} user={user}/>
//         ))}
//       </div>
//     )
//   }
// }

render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    grdGap: '1rem'
}

export default Users