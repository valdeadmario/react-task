import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";
import { deletePost } from "../Posts/actions";
import { loadSpecificPost } from "./actions";

import Comment from "../../components/Comment";
import AddComment from "../../components/AddComment";

import * as style from "./style";

const SpecificPost = withRouter(({ history, match }) => {
  const dispatch = useDispatch();
  console.log(match.params.postId);
  const { post, isLoading } = useSelector(
    (state: RootState) => state.specificPost
  );
  console.log(post);
  useEffect(() => {
    console.log("assda");
    if (match.params.postId) {
      console.log("asdasd");
      dispatch(loadSpecificPost(match.params.postId));
    } else {
      history.push("/");
    }
  }, [dispatch, history, match.params.postId]);

  const onClose = () => history.push("/");

  const onDelete = () => {
    if (post) {
      dispatch(deletePost(post.id));
      onClose();
    }
  };

  return (
    <style.Modal>
      <style.Container>
        <style.Close onClick={onClose}>Close</style.Close>
        {console.log(post)}
        {post && (
          <React.Fragment>
            <h5 className="modal-title">{post.title}</h5>

            <span>#{post.id}</span>

            <div className="modal-body">
              <p>{post.body}</p>
              <button onClick={onDelete}>delete</button>
              <div>
                <h3>Comments</h3>

                <AddComment postId={match.params.postId} />

                {post.comments &&
                  post.comments.length > 0 &&
                  post.comments.map((comment: any) => (
                    <Comment item={comment} key={`comment-${comment.id}`} />
                  ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </style.Container>
    </style.Modal>
  );
});

export default SpecificPost;
