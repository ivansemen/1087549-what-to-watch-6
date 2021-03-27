import {ActionType} from './action';

const initialState = {
  genre: `All genres`,
  movieList: [],
  isDataLoaded: false
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
        movieList: action.movieList,
        isDataLoaded: true
      };
  }

  return state;
};

export {reducer};
