import {
  SET_SPECIFIC_POST,
  SET_IS_LOADING,
  SpecificPostAction
} from "./actionTypes";

type State = {
  post: any;
  isLoading: boolean;
};

const initialState: State = {
  post: [],
  isLoading: true
};

const postsReducer = (
  state = initialState,
  action: SpecificPostAction
): State => {
  switch (action.type) {
    case SET_SPECIFIC_POST:
      return { ...state, post: action.payload };

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
