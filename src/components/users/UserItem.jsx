import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const UserItem = ({ user: { login, avatar_url, html_url } }) => {
//   // state = {
//   //     id: 'id',
//   //     login: 'mojombo',
//   //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//   //     html_url: 'https://github.com/mojombo'
//   // }

//   return (
//     <div className='card text-center'>
//       <img
//         src={avatar_url}
//         alt=''
//         className='round-img'
//         style={{ width: '60px' }}
//       />

//       <h3>{login}</h3>

//       <div>
//         <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
//           More
//         </Link>
//       </div>
//     </div>
//   );
// };

// UserItem.propTypes = {
//   user: PropTypes.object.isRequired,
// };

// export default UserItem;
