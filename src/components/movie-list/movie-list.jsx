import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {debounce} from '../../utils/debounce';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import ShowMore from '../show-more/show-more';

const MovieList = (props) => {
  const {movieList} = props;
  const [activeFilm, setActiveFilm] = useState(0);
  const [films, setFilms] = useState(8);

  const handleMouseOver = debounce(function (film) {
    setActiveFilm(film.id);
  }, 1000);

  const NUMBER_FILMS = 8;

  const filmList = movieList.slice(0, films).map((film) => {
    return <MovieCard film={film} key={film.id} onmouseover={() => handleMouseOver(film)} onmouseout={() => setActiveFilm(0)} activeFilm={activeFilm}/>;
  }
  );

  const handleShowMore = () => {
    setFilms(films + Math.min(NUMBER_FILMS, movieList.length - films));
  };

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmList}
      </div>
      {movieList.length > films ? <ShowMore onclick={handleShowMore}/> : ``}
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
