import {requireAuthorization, getMovie, sendComment, getMovieList, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getMovieList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(getMovie(data)))
    .catch(() => {
      dispatch(redirectToRoute(`/404`));
    })
);

export const review = (idFilm, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${idFilm}`, {rating, comment})
    .then(() => dispatch(sendComment()))
);
