import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiSearchMovie } from 'components/api';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/moviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputMovies, setInputMovies] = useState([]);
  const [visibleText, setVisibleText] = useState(false);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    console.log('query', query);

    apiSearchMovie(query)
      .then(response => {
        setInputMovies(response.results);
        setVisibleText(true);
      })
      .catch(error => {
        setVisibleText(true);
        console.error('Ошибка:', error);
      });
  }, [searchParams]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {inputMovies.length > 0 ? (
        <MoviesList moviesArray={inputMovies} />
      ) : (
        visibleText && 'We have no this movie'
      )}
    </div>
  );
};
export default Movies;
