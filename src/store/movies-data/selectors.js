import {createSelector} from 'reselect';
import {keysToCamel} from '../../utils/utils';
import {NameSpace} from '../root-reducer';

export const getMovieList = (state) => state[NameSpace.DATA].movieList;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getMovie = (state) => state[NameSpace.DATA].movie;
export const getLoadedMovieStatus = (state) => state[NameSpace.DATA].isMovieLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getLoadedComments = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getLoadedPromoFilm = (state) => state[NameSpace.DATA].isPromoFilmLoaded;
export const getActiveGenre = (state) => state[NameSpace.DATA].genre;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getLoadedFavoriteFilms = (state) => state[NameSpace.DATA].isFavoriteFilmsLoaded;
export const sendFavoriteFilms = (state) => state[NameSpace.DATA].sendedMovie;

export const getFilteredFilms = createSelector([getMovieList, getActiveGenre],
    (movieList, genre) => genre === `All genres` ? movieList.map((movie) => keysToCamel(movie)) : movieList.map((movie) => keysToCamel(movie)).filter((film) => film.genre === genre)
);
