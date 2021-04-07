import React from 'react';
import {changeGenre} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMoviesList, getActiveGenre} from '../../store/movies-data/selectors';

const GenreList = (props) => {
  const {genres, changeActiveGenre, activeGenre} = props;

  const genreList = genres().map((genre, index) => {
    return (
      <li className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} key={index} onClick={(evt) => {
        evt.preventDefault();
        changeActiveGenre(genre);
      }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  });
  // Создаёт элементы фильтрации

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.func.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  genres: () => {
    const genres = [`All genres`];

    for (let film of getMoviesList(state)) {
      if (!genres.includes(film.genre)) {
        genres.push(film.genre);
      }
    }
    return genres;
  },
  activeGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(genre) {
    dispatch(changeGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
