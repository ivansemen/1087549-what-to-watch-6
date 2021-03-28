export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIE_LIST: `GET_MOVIE_LIST`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};
