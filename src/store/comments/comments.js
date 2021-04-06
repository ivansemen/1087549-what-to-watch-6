import {ActionType} from '../action';

const initialState = {
  comment: [],
  comments: [],
  isCommentsLoaded: false,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEND_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        isCommentsLoaded: true,
      };
  }

  return state;
};

export {comments};
