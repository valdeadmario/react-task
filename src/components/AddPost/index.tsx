import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createPost, updatePost } from "../../containers/Posts/actions";

import * as style from "./style";

type Props = {
  editingPost?: any;
  setEditingPost?: (post: object) => void;
};

const AddPost = ({ editingPost, setEditingPost }: Props) => {
  const [title, setTitle] = useState(editingPost ? editingPost.title : "");
  const [body, setBody] = useState(editingPost ? editingPost.body : "");
  const dispatch = useDispatch();

  const handleAddPost = (e: any) => {
    e.preventDefault();

    if (title && body) {
      if (editingPost && setEditingPost) {
        dispatch(updatePost(editingPost.id, title, body));
        setEditingPost({});
      } else {
        dispatch(createPost(title, body));
      }
      setTitle("");
      setBody("");
    }
  };

  return (
    <style.Container>
      <form onSubmit={handleAddPost}>
        <input
          name="title"
          value={title}
          placeholder="What is your title?"
          onChange={ev => setTitle(ev.target.value)}
        />
        <textarea
          value={body}
          placeholder="What is the news?"
          className="form-control"
          onChange={ev => setBody(ev.target.value)}
          rows={3}
        ></textarea>
        <button className="btn btn-primary">Post</button>
      </form>
    </style.Container>
  );
};

export default AddPost;
