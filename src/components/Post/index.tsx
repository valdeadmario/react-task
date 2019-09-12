import React from "react";
import { useDispatch } from "react-redux";

import { deletePost } from "../../containers/Posts/actions";

import * as style from "./style";

type Props = {
  data: any;
  setEditingPost: (post: object) => void;
};

const Post = ({ data, setEditingPost }: Props) => {
  const dispatch = useDispatch();
  const { id, title, body } = data;

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };

  return (
    <div className="card">
      <p>{title}</p>
      <div className="card-body">{body}</div>
      <button>Open</button>
      <button onClick={() => setEditingPost(data)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
