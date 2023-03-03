import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;

// Search.js:
// import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
// import GithubContext from '../../context/github/GithubContext';

// const Search = ({ showClear, clearUsers, setAlert }) => {
//   const githubContext = useContext(GithubContext);

//   const [text, setText] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (text === '') {
//       setAlert(' Please enter something ', 'light');
//     } else {
//       githubContext.searchUsers(text);
//       setText('');
//     }
//   };

//   const onChange = (e) => setText(e.target.value);

//   return (
//     <div>
//       <form onSubmit={onSubmit} className='form'>
//         <input
//           type='text'
//           name='text'
//           placeholder='Search Users...'
//           value={text}
//           onChange={onChange}
//         />
//         <input
//           type='submit'
//           value='Search'
//           className='btn btn-dark btn-block'
//         />
//       </form>
//       {showClear && (
//         <button className='btn btn-light btn-block' onClick={clearUsers}>
//           Clear
//         </button>
//       )}
//     </div>
//   );
// };

// Search.propTypes = {
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };

// export default Search;
