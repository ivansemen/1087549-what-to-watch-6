import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {debounce} from '../../utils/debounce';
import PropTypes from 'prop-types';
import {NUMBER_SIMILAR_FILMS} from '../../const';

const SimilarMovieList = (props) => {
  const {films, film} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  const movieList = films.filter((movie) => movie.genre === film.genre);

  const handleMouseOver = debounce(function (movie) {
    setActiveFilm(movie.id);
  }, 1000);

  const filmList = [];

  if (movieList.length > NUMBER_SIMILAR_FILMS) {
    movieList.length = 4;
  }

  for (let i = 0; i < movieList.length; i++) {
    filmList.push(<MovieCard film={movieList[i]} key={movieList[i].id} onmouseover={() => handleMouseOver(movieList[i])} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>);
  }

  return (
    <div className="catalog__movies-list">
      {filmList}
    </div>
  );
};

export default SimilarMovieList;

SimilarMovieList.propTypes = {
  films: PropTypes.array.isRequired,
  film: PropTypes.object.isRequired,
};
