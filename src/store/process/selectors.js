import {NameSpace} from '../root-reducer';

export const getActiveGenre = (state) => state[NameSpace.PROCESS].genre;
export const sendComment = (state) => state[NameSpace.PROCESS].comment;
