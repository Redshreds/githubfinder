import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Link allows us to change pages without affecting state. "A tags" will clear search field. Links will preserve search results.

// const Navbar = ({icon, title}) => { //Prop Types good for you! Take you prop type medicine

//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={icon} /> {title}
//         </h1>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     );
// };

// Navbar.defaultProps = {
//   title: 'Github Finder',
//   icon: 'fab fa-github'
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired
// };

// export default Navbar
