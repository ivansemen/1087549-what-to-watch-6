export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIE_LIST: `GET_MOVIE_LIST`,
  GET_MOVIE: `GET_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `game/redirectToRoute`,
  SEND_COMMENT: `SEND_COMMENT`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre,
  }),
  getMovieList: (movieList) => ({
    type: ActionType.GET_MOVIE_LIST,
    movieList,
  }),
  getMovie: (movie) => ({
    type: ActionType.GET_MOVIE,
    movie,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  sendComment: (comment) => ({
    type: ActionType.SEND_COMMENT,
    comment,
  }),
};
