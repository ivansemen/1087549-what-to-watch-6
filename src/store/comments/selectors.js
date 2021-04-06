import {NameSpace} from '../root-reducer';

export const sendComment = (state) => state[NameSpace.COMMENTS].comment;
export const getComments = (state) => state[NameSpace.COMMENTS].comments;
export const getLoadedComments = (state) => state[NameSpace.COMMENTS].isCommentsLoaded;
