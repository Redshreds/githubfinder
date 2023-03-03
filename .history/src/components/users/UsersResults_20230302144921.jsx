import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

//Users.js:
// import React, { useContext } from 'react';
// import UserItem from './UserItem';
// import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
// import GithubContext from '../../context/github/GithubContext';

// const Users = ({ users, loading }) => {
//   const githubContext = useContext(GithubContext);

//   if (loading) {
//     return <Spinner />;
//   } else {
//     return (
//       <div style={userStyle}>
//         {users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// };
// //Results in showing user.item over and over because of it using State.
// //   render() {
// //     return (
// //       <div>
// //         {this.state.users.map(user => (
// //             <UserItem key={user.id} user={user}/>
// //         ))}
// //       </div>
// //     )
// //   }
// // }

// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   grdGap: '1rem',
// };

// export default Users;
