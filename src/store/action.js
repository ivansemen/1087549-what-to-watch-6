export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIE_LIST: `GET_MOVIE_LIST`,
  GET_MOVIE: `GET_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `game/redirectToRoute`,
  SEND_COMMENT: `SEND_COMMENT`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_FAVORITE_FILMS: `GET_FAVORITE_FILMS`,
  SEND_FAVORITE_FILM: `SEND_FAVORITE_FILM`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});

export const getMovie = (movie) => ({
  type: ActionType.GET_MOVIE,
  movie,
});

export const getMovieList = (movieList) => ({
  type: ActionType.GET_MOVIE_LIST,
  movieList,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const sendComment = (comment) => ({
  type: ActionType.SEND_COMMENT,
  comment,
});

export const getComments = (comments) => ({
  type: ActionType.GET_COMMENTS,
  comments,
});

export const getPromoFilm = (promoFilm) => ({
  type: ActionType.GET_PROMO_FILM,
  promoFilm,
});

export const getFavoriteFilms = (favoriteFilms) => ({
  type: ActionType.GET_FAVORITE_FILMS,
  favoriteFilms,
});

export const sendFavoriteFilms = (sendedFilm) => ({
  type: ActionType.SEND_FAVORITE_FILM,
  sendedFilm,
});
