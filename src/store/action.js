export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIE_LIST: `GET_MOVIE_LIST`,
  GET_MOVIE: `GET_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `game/redirectToRoute`,
  SEND_COMMENT: `SEND_COMMENT`,
  GET_COMMENTS: `GET_COMMENTS`,
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
