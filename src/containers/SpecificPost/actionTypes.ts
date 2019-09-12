import { Thunky } from "../../store/types";

export const SET_SPECIFIC_POST = "SPECIFIC_POST_ACTION:SET_SPECIFIC_POST";
export const SET_IS_LOADING = "SPECIFIC_POST_ACTION:SET_IS_LOADING";
export const CREATE_COMMENT = "SPECIFIC_POST_ACTION:CREATE_COMMENT";

type SetSpecificPost = {
  type: typeof SET_SPECIFIC_POST;
  payload: any | null;
};

type CreateComment = {
  type: typeof CREATE_COMMENT;
  payload: string;
};

type SetLoading = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type SpecificPostAction = SetSpecificPost | SetLoading | CreateComment;
export type AsyncSpecificPostAction = Thunky<SpecificPostAction>;
