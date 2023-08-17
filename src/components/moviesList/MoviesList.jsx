import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();
  return (
    <main>
      <ul>
        {moviesArray.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MoviesList;

MoviesList.protoTypes = {
  moviesArray: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
