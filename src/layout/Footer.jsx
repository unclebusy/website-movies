import React from 'react';

function Footer() {
  return (
      <footer className="page-footer blue darken-1">
        <div className="footer-copyright">
          <div className="container">
            {new Date().getFullYear()} © All rights reserved | Made by Unclebusy
            <a className="grey-text text-lighten-4 right" href="https://github.com/unclebusy/website-movies">
              This project on my GitHub
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
