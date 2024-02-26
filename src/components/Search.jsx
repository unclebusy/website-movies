import { useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from "./RadioInput";

function Search(props) {
  const { updateSearchResult = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      updateSearchResult(search, type);
    }
  };

  const handleFilterChange = (e) => {
    setType(e.target.dataset.type);
    updateSearchResult(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button
            className="btn-search waves-effect waves-light btn"
            type="submit"
            onClick={() => updateSearchResult(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="all">
          <RadioInput id="all" type="all" handleFilterChange={handleFilterChange} checked={type === 'all'} />
        </label>
        <label htmlFor="movie">
          <RadioInput id="movie" type="movie" handleFilterChange={handleFilterChange} checked={type === 'movie'} />
        </label>
        <label htmlFor="series">
          <RadioInput id="series" type="series" handleFilterChange={handleFilterChange} checked={type === 'series'} />
        </label>
      </div>
    </div>
  );
}

Search.propTypes = {
  updateSearchResult: PropTypes.func.isRequired,
};

export default Search;
