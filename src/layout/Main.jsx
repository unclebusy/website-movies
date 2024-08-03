import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Response === 'True' ? data.Search : []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSearchResult = (str, type = 'all') => {
    setLoading(true);
    fetchMovies(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`);
  };

  useEffect(() => {
    fetchMovies(`https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`);
  }, []);

  return (
      <main className="content container">
        <Search updateSearchResult={updateSearchResult} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
  );
}

export default Main;
