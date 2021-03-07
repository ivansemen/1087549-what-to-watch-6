import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {debounce} from '../../utils/debounce';

const MovieList = (props) => {
  const {films} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const movieList = films.map((film) =>
    <MovieCard film={film} key={film.id} onmouseover={() => handleMouseOver(film)} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>
  );

  return (
    <div className="catalog__movies-list">
      {movieList}
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
