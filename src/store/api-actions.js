import {ActionCreator} from "./action";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.getMovieList(data)))
);
