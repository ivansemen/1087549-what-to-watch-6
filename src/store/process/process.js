import {ActionType} from '../action';

const initialState = {
  genre: `All genres`,
  comment: [],
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre
      };

    case ActionType.SEND_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
  }

  return state;
};

export {process};
