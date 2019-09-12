import * as service from "../../helpers/webApiHelper";
import { PostType } from "../../types/post.types";

import {
  SET_POSTS,
  SET_IS_LOADING,
  PostAction,
  AsyncPostAction
} from "./actionTypes";

const setPosts = (posts: PostType[]): PostAction => ({
  type: SET_POSTS,
  payload: posts
});

const setIsLoading = (isLoading: boolean): PostAction => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const createPost = (
  title: string,
  body: string
): AsyncPostAction => async (dispatch, getState) => {
  const newPost = await service.createPost( title, body );

  const { items } = getState().posts;

  const updatedPosts = [...items, newPost];

  dispatch(setPosts(updatedPosts));
};

export const updatePost = (
  postId: string,
  title: string,
  body: string
): AsyncPostAction => async (dispatch, getState) => {
  const newPost = await service.updatePost(postId, title, body );

  const { items } = getState().posts;
  const updatedPosts = items.map((i: any) =>
    i.id === newPost.id ? newPost : i
  );
  dispatch(setPosts(updatedPosts));
};

export const deletePost = (postId: string): AsyncPostAction => async (
  dispatch,
  getState
) => {
  await service.deletePost(postId);

  const { items } = getState().posts;
  const updatedPosts = items.filter((post: PostType) => post.id !== postId);

  dispatch(setPosts(updatedPosts));
};

export const loadPosts = (): AsyncPostAction => async (dispatch, getRoot) => {
  dispatch(setIsLoading(true));

  const posts = await service.getPosts();

  dispatch(setPosts(posts));
  dispatch(setIsLoading(false));
};
