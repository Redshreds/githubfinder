import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
        {
            id: '1',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        },
        {
            id: '2',
            login: 'defunkt',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/defunkt'
        },
        {
            id: '3',
            login: 'pjhyett',
            avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/pjhyett'
        }
    ]
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