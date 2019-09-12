import { CommentType } from "./comment.types";
export type PostType = {
  id: string;
  title: string;
  body: string;
};

export type SpecificPostType = {
  id: string;
  title: string;
  body: string;
  comments: CommentType[];
};
