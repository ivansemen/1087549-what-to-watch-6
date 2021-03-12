import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {debounce} from '../../utils/debounce';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const MovieList = (props) => {
  const {movieList} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const filmList = movieList().map((film) =>
    <MovieCard film={film} key={film.id} onmouseover={() => handleMouseOver(film)} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>
  );

  return (
    <div className="catalog__movies-list">
      {filmList}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movieList: () => {
    if (state.genre === `All genres`) {
      return state.movieList;
    } else {
      return state.movieList.filter((film) => film.genre === state.genre);
    }
  }
});

const mapDispatchToProps = (dispatch) => ({
  getMovieList(movieList) {
    dispatch(ActionCreator.getMovieList(movieList));
  },
});

export {MovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
