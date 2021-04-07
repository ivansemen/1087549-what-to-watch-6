import React, {useState, useEffect, useRef} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import ShowMore from '../show-more/show-more';
import {NUMBER_FILMS} from '../../const';
import {debounce} from 'lodash';

let handleMouseOver;

const MovieList = (props) => {
  const {moviesList} = props;

  const ref = useRef(true);
  const [activeFilm, setActiveFilm] = useState(0);
  const [filmsCount, setFilmsCount] = useState(NUMBER_FILMS);

  handleMouseOver = debounce(function (film) {
    if (ref.current) {
      setActiveFilm(film.id);
    }
  }, 1000);

  useEffect(() => {
    return () => {
      ref.current = false;
    };
  }, []);

  const filmsList = moviesList.slice(0, filmsCount).map((film) => {
    return <MovieCard film={film} key={film.id} onMouseOver={() => handleMouseOver(film)} onMouseOut={() => setActiveFilm(0)} activeFilm={activeFilm}/>;
  }
  );

  const handleShowMore = () => {
    setFilmsCount(filmsCount + Math.min(NUMBER_FILMS, moviesList.length - filmsCount));
  };

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmsList}
      </div>
      {moviesList.length > filmsCount ? <ShowMore onclick={handleShowMore}/> : ``}
    </React.Fragment>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};

// const mapStateToProps = (state) => ({
//   moviesList: getFilteredFilms(state),
// });


export default MovieList;
// export default connect(mapStateToProps, null)(MovieList);
