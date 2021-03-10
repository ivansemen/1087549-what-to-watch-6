import React, {useState} from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {films, changeGenre} = props;
  const [activeGenre, setActiveGenre] = useState(0);

  const genres = [`All genres`];

  for (let film of films) {
    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  }

  // Пушит в массив только уникальные жанры

  const checkActiveGenre = (index) => {
    switch (index) {
      case activeGenre:
        return `catalog__genres-item catalog__genres-item--active`;
    }
    return `catalog__genres-item`;
  };

  // Проверяет, активный ли элемент фильтрации

  const genreList = genres.map((genre, index) => {
    return (
      <li className={checkActiveGenre(index)} key={index} onClick={(evt) => {
        evt.preventDefault();
        setActiveGenre(index);
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
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
