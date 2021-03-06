import {requireAuthorization, getMovie, sendComment, getMoviesList, redirectToRoute, getComments, getPromoFilm, getFavoriteFilms, sendFavoriteFilm, getErrorComment} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";
import {keysToCamel} from '../utils/utils';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(keysToCamel(getMoviesList(data))))
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
    .then(({data}) => dispatch(keysToCamel(getMovie(data))))
    .catch(() => {
      dispatch(redirectToRoute(`/404`));
    })
);

export const review = (idFilm, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${idFilm}`, {rating, comment})
    .then(() => dispatch(sendComment()))
    .catch(() => {
      dispatch(getErrorComment());
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(keysToCamel(getComments(data))))
    .catch(() => {})
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(keysToCamel(getPromoFilm(data))))
    .catch(() => {})
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(keysToCamel(getFavoriteFilms(data))))
);

export const sendFavoriteMovie = (idFilm, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${idFilm}/${Number(!status)}`)
    .then(({data}) => dispatch(sendFavoriteFilm(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
