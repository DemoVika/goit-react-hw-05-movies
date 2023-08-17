import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiGetMovieReviews } from 'components/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;
    setStatus('pending');
    apiGetMovieReviews(movieId)
      .then(response => {
        setStatus('resolved');
        setReviews(response.results);
        console.log('reviews', response);
      })
      .catch(error => {
        console.error('Ошибка:', error);
        setStatus('rejected');
      });
  }, [movieId]);

  if (
    reviews.length === 0 &&
    (status === 'rejected' || status === 'resolved')
  ) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <b>Author: {item.author}</b>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
