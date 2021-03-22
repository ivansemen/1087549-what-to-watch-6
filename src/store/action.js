export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIE_LIST: `GET_MOVIE_LIST`,
  GET_FIRST_FILM: `GET_FIRST_FILM`
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
  getFirstFilm: (firstFilm) => ({
    type: ActionType.GET_FIRST_FILM,
    firstFilm
  })
};
