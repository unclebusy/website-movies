import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

function Movies({ movies }) {
  return (
      <div className="movies">
        {movies.length > 0 ? (
            movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            ))
        ) : (
            <h4>Not found &#128580;</h4>
        )}
      </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

Movies.defaultProps = {
  movies: [],
};

export default Movies;

