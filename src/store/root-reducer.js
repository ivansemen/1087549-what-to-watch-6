import {combineReducers} from 'redux';
import {comments} from './comments/comments';
import {moviesData} from './movies-data/movies-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  COMMENTS: `COMMENTS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.USER]: user,
});
