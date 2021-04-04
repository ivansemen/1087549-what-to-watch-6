import {combineReducers} from 'redux';
import {process} from './process/process';
import {moviesData} from './movies-data/movies-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});
