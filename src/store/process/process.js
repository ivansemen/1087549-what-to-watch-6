import {ActionType} from '../action';

const initialState = {
  comment: [],
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEND_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
  }

  return state;
};

export {process};
