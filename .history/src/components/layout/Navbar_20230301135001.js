import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Link allows us to change pages without affecting state. "A tags" will clear search field. Links will preserve search results.

const Navbar = ({icon, title}) => { //Prop Types good for you! Take you prop type medicine

    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar