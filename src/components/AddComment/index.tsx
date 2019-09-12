import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createComment } from "../../containers/SpecificPost/actions";

import * as style from "./style";

const AddComment = ({ postId }: any) => {
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleAddPost = (e: any) => {
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
          rows={3}
        ></textarea>
        <button className="btn btn-primary">Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
