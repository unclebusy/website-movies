import React from 'react';

function Header() {
  return (
    <nav className="blue darken-3">
      <div className="nav-wrapper">
        <img src="https://www.svgrepo.com/show/285682/oscar.svg" alt="Oscar logo" style={{ margin: '1rem 0.5rem', maxWidth: '36px' }} />
        <a href="https://unclebusy.github.io/website-movies" className="brand-logo">Website with movies on React</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/unclebusy/website-movies">This project on my GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
