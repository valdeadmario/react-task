import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaComment } from "react-icons/fa";

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
    <style.Card className="card">
      <style.Title>{title}</style.Title>
      <div className="card-body">{body}</div>
      <style.Buttons>
        <Link className="text-info" to={`/${id}`}>
          <FaComment />
        </Link>
        <style.Button
          className="text-success"
          onClick={() => setEditingPost(data)}
        >
          <FaEdit />
        </style.Button>
        <style.Button className="text-danger" onClick={handleDelete}>
          <FaTrash />
        </style.Button>
      </style.Buttons>
    </style.Card>
  );
};

export default Post;
