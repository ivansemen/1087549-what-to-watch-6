import React from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {genres, changeGenre, activeGenre} = props;

  const genreList = genres().map((genre, index) => {
    return (
      <li className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} key={index} onClick={(evt) => {
        evt.preventDefault();
        changeGenre(genre);
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
  changeGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  genres: () => {
    const genres = [`All genres`];

    for (let film of state.movieList) {
      if (!genres.includes(film.genre)) {
        genres.push(film.genre);
      }
    }
    return genres;
  },
  activeGenre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
