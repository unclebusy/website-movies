import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Movie key={movie.imdbID} {...movie} />
        ))
      ) : (
        <h4>Not found &#128580;</h4>
      )}
    </div>
  );
}

Movies.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movies: PropTypes.arrayOf(PropTypes.object),
};

Movies.defaultProps = {
  movies: [],
};

export default Movies;
