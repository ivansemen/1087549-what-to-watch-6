import {ActionType} from '../action';

const initialState = {
  comment: [],
  comments: [],
  isCommentsLoaded: false,
  commentError: false,
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
    case ActionType.ERROR_COMMENT:
      return {
        ...state,
        commentError: true,
      };
  }

  return state;
};

export {comments};
