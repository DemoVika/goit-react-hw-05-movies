import MoviesList from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
import { apiGetTrendingMovies } from 'components/api';

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    apiGetTrendingMovies()
      .then(response => {
        setMoviesArray(response.results);
      })
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {moviesArray.length > 0 && <MoviesList moviesArray={moviesArray} />}
    </main>
  );
};

export default Home;
