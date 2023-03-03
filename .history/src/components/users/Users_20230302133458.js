import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const Users = ({ users, loading }) => {
  const githubContext = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  grdGap: '1rem',
};

export default Users;
