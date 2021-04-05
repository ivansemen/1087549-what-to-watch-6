import {ActionType} from '../action';

const initialState = {
  movieList: [],
  isDataLoaded: false,
  movie: {},
  isMovieLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  promoFilm: {},
  isPromoFilmLoaded: false,
  genre: `All genres`,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  sendedMovie: {},
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList,
        isDataLoaded: true,
      };
    case ActionType.GET_MOVIE:
      return {
        ...state,
        movie: action.movie,
        isMovieLoaded: true,
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        isCommentsLoaded: true,
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.promoFilm,
        isPromoFilmLoaded: true,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case ActionType.GET_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.favoriteFilms,
        isFavoriteFilmsLoaded: true,
      };
    case ActionType.SEND_FAVORITE_FILM:
      return {
        ...state,
        sendedMovie: action.sendedMovie,
      };
  }

  return state;
};

export {moviesData};
