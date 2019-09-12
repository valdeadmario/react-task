import * as service from "../../helpers/webApiHelper";
import { SpecificPostType } from "../../types/post.types";

import {
  SET_SPECIFIC_POST,
  SET_IS_LOADING,
  SpecificPostAction,
  AsyncSpecificPostAction
} from "./actionTypes";

const setSpecificPost = (
  specificPost: SpecificPostType
): SpecificPostAction => ({
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

  const { post } = getState().specificPost;

  const comments = [...post.comments, comment];

  dispatch(setSpecificPost({ ...post, comments }));
};

export const loadSpecificPost = (
  postId: string
): AsyncSpecificPostAction => async (dispatch, getRoot) => {
  dispatch(setIsLoading(true));

  const posts = await service.getPost(postId);

  dispatch(setSpecificPost(posts));
  dispatch(setIsLoading(false));
};
