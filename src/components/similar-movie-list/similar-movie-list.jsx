import React, {useState, useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import {debounce} from '../../utils/debounce';
import PropTypes from 'prop-types';
import {NUMBER_SIMILAR_FILMS} from '../../const';
import {getMoviesList, getLoadedDataStatus} from '../../store/movies-data/selectors';
import {connect} from 'react-redux';
import {fetchMoviesList} from "../../store/api-actions";

const SimilarMovieList = (props) => {
  const {film, moviesList, isDataLoaded} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  const filteredMoviesList = moviesList.filter((movie) => movie.genre === film.genre);

  const handleMouseOver = debounce(function (movie) {
    setActiveFilm(movie.id);
  }, 1000);

  const filmList = [];

  if (filteredMoviesList.length > NUMBER_SIMILAR_FILMS) {
    filteredMoviesList.length = 4;
  }

  for (let i = 0; i < filteredMoviesList.length; i++) {
    filmList.push(<MovieCard film={filteredMoviesList[i]} key={filteredMoviesList[i].id} onmouseover={() => handleMouseOver(filteredMoviesList[i])} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>);
  }

  return (
    <div className="catalog__movies-list">
      {filmList}
    </div>
  );
};

SimilarMovieList.propTypes = {
  films: PropTypes.array,
  film: PropTypes.object,
  onLoadData: PropTypes.func,
  moviesList: PropTypes.array,
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  isDataLoaded: getLoadedDataStatus(state),
});

export {SimilarMovieList};
export default connect(mapStateToProps, null)(SimilarMovieList);
