import React from 'react';
import PropTypes from 'prop-types';

function Movie({ Title: title, Year: year, imdbID: id, Type: type, Poster: poster }) {
  return (
      <div id={id} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={poster !== 'N/A' ? poster : "https://placehold.co/600x400"} alt={title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>
            {year} <span className="right">{type}</span>
          </p>
          <p>
            <a className="center" href="!#">Watch</a>
          </p>
        </div>
      </div>
  );
}

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
};

export default Movie;
