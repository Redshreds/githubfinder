import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


const Users = ({ users, loading }) => {
      if(loading) {
        return <Spinner />
      } else {
        return (
          <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
          </div>
        );
      }
      
  }
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



  const userStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      grdGap: '1rem'
  };

export default Users