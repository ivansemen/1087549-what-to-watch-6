import {ActionType} from '../action';

const initialState = {
  movieList: [],
  isDataLoaded: false,
  movie: {},
  isMovieLoaded: false,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList,
        isDataLoaded: true
      };
    case ActionType.GET_MOVIE:
      return {
        ...state,
        movie: action.movie,
        isMovieLoaded: true
      };
  }

  return state;
};

export {moviesData};
