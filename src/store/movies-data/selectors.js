import {NameSpace} from '../root-reducer';

export const getMovieList = (state) => state[NameSpace.DATA].movieList;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getMovie = (state) => state[NameSpace.DATA].movie;
export const getLoadedMovieStatus = (state) => state[NameSpace.DATA].isMovieLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getLoadedComments = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getLoadedPromoFilm = (state) => state[NameSpace.DATA].isPromoFilmLoaded;

