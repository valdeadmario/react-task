import React from "react";

import { CommentType } from "../../types/comment.types";

import * as style from "./style";

type Props = {
  item: CommentType;
};

const Comment = ({ item }: Props) => {
  return (
    <style.Comment>
      {item.body}
    </style.Comment>
  );
};

export default Comment;
