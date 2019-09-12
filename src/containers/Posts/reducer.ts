import { SET_POSTS, SET_IS_LOADING, PostAction } from "./actionTypes";
import { PostType } from "../../types/post.types";

type State = {
  items: PostType[];
  isLoading: boolean;
};

const initialState: State = {
  items: [],
  isLoading: true
};

const postsReducer = (state = initialState, action: PostAction): State => {
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
