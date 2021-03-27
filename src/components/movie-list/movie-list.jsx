import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {debounce} from '../../utils/debounce';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import ShowMore from '../show-more/show-more';
import {NUMBER_FILMS} from '../../const';
import {keysToCamel} from '../../utils/utils';

const MovieList = (props) => {
  const {movieList} = props;
  const [activeFilm, setActiveFilm] = useState(0);
  const [filmsCount, setFilmsCount] = useState(NUMBER_FILMS);

  const correctFilms = movieList.map((movie) => keysToCamel(movie));

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const filmList = correctFilms.slice(0, filmsCount).map((film) => {
    return <MovieCard film={film} key={film.id} onmouseover={() => handleMouseOver(film)} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>;
  }
  );

  const handleShowMore = () => {
    setFilmsCount(filmsCount + Math.min(NUMBER_FILMS, movieList.length - filmsCount));
  };

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmList}
      </div>
      {movieList.length > filmsCount ? <ShowMore onclick={handleShowMore}/> : ``}
    </React.Fragment>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  movieList: state.genre === `All genres` ? state.movieList : state.movieList.filter((film) => film.genre === state.genre)
});

const mapDispatchToProps = (dispatch) => ({
  getMovieList(movieList) {
    dispatch(ActionCreator.getMovieList(movieList));
  },
});

export {MovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
