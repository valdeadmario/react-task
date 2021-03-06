import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createComment } from "../../containers/SpecificPost/actions";

import * as style from "./style";

type Props = {
  postId: string;
};

const AddComment = ({ postId }: Props) => {
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (body) {
      dispatch(createComment(postId, body));
      setBody("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddPost}>
        <textarea
          value={body}
          placeholder="What is the news?"
          className="form-control"
          onChange={ev => setBody(ev.target.value)}
          rows={2}
        ></textarea>
        <style.Button className="btn btn-primary">Comment</style.Button>
      </form>
    </div>
  );
};

export default AddComment;
