import React, {useState, useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import {debounce} from '../../utils/debounce';
import PropTypes from 'prop-types';
import {NUMBER_SIMILAR_FILMS} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {getMovieList, getLoadedDataStatus} from '../../store/movies-data/selectors';
import {connect} from 'react-redux';
import {fetchMovieList} from "../../store/api-actions";

const SimilarMovieList = (props) => {
  const {film, onLoadData, movieList, isDataLoaded} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  useEffect(() => {
    onLoadData();
  }, []);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const filteredMovieList = movieList.filter((movie) => movie.genre === film.genre);

  const handleMouseOver = debounce(function (movie) {
    setActiveFilm(movie.id);
  }, 1000);

  const filmList = [];

  if (filteredMovieList.length > NUMBER_SIMILAR_FILMS) {
    filteredMovieList.length = 4;
  }

  for (let i = 0; i < filteredMovieList.length; i++) {
    filmList.push(<MovieCard film={filteredMovieList[i]} key={filteredMovieList[i].id} onmouseover={() => handleMouseOver(filteredMovieList[i])} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>);
  }

  return (
    <div className="catalog__movies-list">
      {filmList}
    </div>
  );
};

SimilarMovieList.propTypes = {
  films: PropTypes.array.isRequired,
  film: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movieList: getMovieList(state),
  isDataLoaded: getLoadedDataStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovieList());
  },
});

export {SimilarMovieList};
export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovieList);
