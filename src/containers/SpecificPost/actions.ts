import * as service from "../../helpers/webApiHelper";

import {
  CREATE_COMMENT,
  SET_SPECIFIC_POST,
  SET_IS_LOADING,
  SpecificPostAction,
  AsyncSpecificPostAction
} from "./actionTypes";

const setSpecificPost = (specificPost: any): SpecificPostAction => ({
  type: SET_SPECIFIC_POST,
  payload: specificPost
});

const setIsLoading = (isLoading: boolean): SpecificPostAction => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const createComment = (
  postId: string,
  body: string
): AsyncSpecificPostAction => async (dispatch, getState) => {
  const comment = await service.createComment(Number(postId), body);
  console.log(comment);
  const { post } = getState().specificPost;

  const comments = [...post.comments, comment];

  dispatch(setSpecificPost({ ...post, comments }));
};

export const loadSpecificPost = (
  postId: string
): AsyncSpecificPostAction => async (dispatch, getRoot) => {
  dispatch(setIsLoading(true));

  const posts = await service.getPost(postId);
  console.log(posts);
  dispatch(setSpecificPost(posts));
  dispatch(setIsLoading(false));
};
