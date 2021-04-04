import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {debounce} from '../../utils/debounce';
import {connect} from 'react-redux';
import ShowMore from '../show-more/show-more';
import {NUMBER_FILMS} from '../../const';
import {keysToCamel} from '../../utils/utils';
import {getMovieList} from '../../store/movies-data/selectors';
import {getActiveGenre} from '../../store/process/selectors';

const MovieList = (props) => {
  const {movieList} = props;
  const [activeFilm, setActiveFilm] = useState(0);
  const [filmsCount, setFilmsCount] = useState(NUMBER_FILMS);

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const filmList = movieList.slice(0, filmsCount).map((film) => {
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
  movieList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movieList: getActiveGenre(state) === `All genres` ? getMovieList(state).map((movie) => keysToCamel(movie)) : getMovieList(state).map((movie) => keysToCamel(movie)).filter((film) => film.genre === getActiveGenre(state))
});

const mapDispatchToProps = (dispatch) => ({
  getMovieList(movieList) {
    dispatch(getMovieList(movieList));
  },
});

export {MovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
