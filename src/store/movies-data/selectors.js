import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';

export const getMoviesList = (state) => state[NameSpace.DATA].moviesList;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getMovie = (state) => state[NameSpace.DATA].movie;
export const getLoadedMovieStatus = (state) => state[NameSpace.DATA].isMovieLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getLoadedPromoFilm = (state) => state[NameSpace.DATA].isPromoFilmLoaded;
export const getActiveGenre = (state) => state[NameSpace.DATA].genre;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getLoadedFavoriteFilms = (state) => state[NameSpace.DATA].isFavoriteFilmsLoaded;
export const sendFavoriteFilm = (state) => state[NameSpace.DATA].sendedMovie;

export const getFilteredFilms = createSelector([getMoviesList, getActiveGenre],
    (moviesList, genre) => genre === `All genres` ? moviesList.map((movie) => movie) : moviesList.map((movie) => movie).filter((film) => film.genre === genre)
);
