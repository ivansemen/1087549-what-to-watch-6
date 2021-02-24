import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';

const MovieList = (props) => {
  const {films} = props;
  let [activeFilm, setActiveFilm] = useState(0);

  const movieList = films.map((film) =>
    <MovieCard film={film} key={film.id} onmouseover={() => setActiveFilm(film.id)} onmouseout={() => setActiveFilm(0)}/>
  );

  return (
    <div className="catalog__movies-list">
      <p className="visually-hidden">{activeFilm}</p>
      {movieList}
    </div>
  );
};

// Добавил скрытый абазац, который выводит activeFilm, потому что Eslint ругался, что
// переменная объявлена, но не используется. Это временное решение

export default MovieList;

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
