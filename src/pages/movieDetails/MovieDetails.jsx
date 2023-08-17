import { Suspense } from 'react';
import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { apiGetMovieDetails } from 'components/api';
import { useEffect, useState } from 'react';
import { Div, Container } from './movieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation(); // объект  уже с новым стейтом фром
  const navigate = useNavigate(); // функция

  useEffect(() => {
    if (!movieId) return;
    apiGetMovieDetails(movieId)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => console.error('Ошибка:', error));
  }, [movieId]);

  const handleGoBack = () => navigate(location.state?.from ?? '/');

  return (
    movieInfo && (
      <main>
        <button
          type="button"
          onClick={handleGoBack}
          style={{ display: 'block' }}
        >
          Go back
        </button>

        <Container>
          <img
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`
                : 'https://placehold.jp/24/cc9999/993333/150x300.jpg'
            }
            alt="movie"
          />
          <Div>
            <h1>{movieInfo.title}</h1>
            <p>User Score: {Math.round(movieInfo.vote_average * 10)} %</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{movieInfo.genres.map(item => item.name).join(' ')}</p>
          </Div>
        </Container>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
};
export default MovieDetails;
