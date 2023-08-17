import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiGetMovieCredits } from 'components/api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    apiGetMovieCredits(movieId)
      .then(response => {
        setCredits(response.cast);
        console.log('credit', response);
      })
      .catch(error => console.error('Ошибка:', error));
  }, [movieId]);

  return (
    <ul>
      {credits.map(item => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : 'https://placehold.jp/24/cc9999/993333/50x70.jpg'
              }
              alt="poster"
              width="100"
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
