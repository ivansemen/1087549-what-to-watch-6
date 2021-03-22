import {ActionType} from './action';
import {keysToCamel} from '../utils/utils';
import movieListMock from '../mocks/films';

const correctFilms = movieListMock.map((film) => keysToCamel(film));

const initialState = {
  genre: `All genres`,
  movieList: correctFilms,
  firstFilm: correctFilms[0]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre
      };
    case ActionType.GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList
      };
    case ActionType.GET_FIRST_FILM:
      return {
        ...state,
        firstFilm: action.firstFilm
      };
  }

  return state;
};

export {reducer};
