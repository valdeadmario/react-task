import { Thunky } from "../../store/types";
import { PostType } from "../../types/post.types";

export const SET_POSTS = "POST_ACTION:SET_POSTS";
export const SET_IS_LOADING = "POST_ACTION:SET_IS_LOADING";
export const CREATE_POST = "POST_ACTION:CREATE_POST";
export const UPDATE_POST = "POST_ACTION:UPDATE_POST";

type SetPosts = {
  type: typeof SET_POSTS;
  payload: PostType[];
};

type CreatePost = {
  type: typeof CREATE_POST;
  payload: string;
};

type UpdatePost = {
  type: typeof UPDATE_POST;
  payload: string;
};

type SetLoading = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type PostAction = SetPosts | SetLoading | CreatePost | UpdatePost;
export type AsyncPostAction = Thunky<PostAction>;
