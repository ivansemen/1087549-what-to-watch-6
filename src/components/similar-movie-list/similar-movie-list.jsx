import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {debounce} from '../../utils/debounce';
import PropTypes from 'prop-types';

const SimilarMovieList = (props) => {
  const {movieList} = props;
  const [activeFilm, setActiveFilm] = useState(0);

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const filmList = [];

  for (let i = 0; i < movieList().length; i++) {
    filmList.push(<MovieCard film={movieList()[i]} key={movieList()[i].id} onmouseover={() => handleMouseOver(movieList()[i])} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>);
  }

  return (
    <div className="catalog__movies-list">
      {filmList}
    </div>
  );
};


SimilarMovieList.propTypes = {
  movieList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieList: () => {
    return state.movieList.filter((film) => film.genre === state.firstFilm.genre);
  }
});

const mapDispatchToProps = (dispatch) => ({
  getMovieList(movieList) {
    dispatch(ActionCreator.getMovieList(movieList));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovieList);
