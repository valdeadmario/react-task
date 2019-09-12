import {
  CREATE_POST,
  UPDATE_POST,
  SET_POSTS,
  SET_IS_LOADING,
  PostAction,
  AsyncPostAction
} from "./actionTypes";

type State = {
  items: any;
  isLoading: boolean;
};

const initialState: State = {
  items: [],
  isLoading: true
};

const postsReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, items: action.payload };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
