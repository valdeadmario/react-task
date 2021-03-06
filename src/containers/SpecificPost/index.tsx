import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import { RootState } from "../../store/types";
import { deletePost } from "../Posts/actions";
import { loadSpecificPost } from "./actions";

import Comment from "../../components/Comment";
import AddComment from "../../components/AddComment";
import Spinner from "../../components/Spinner";

import * as style from "./style";
import { CommentType } from "../../types/comment.types";

const SpecificPost = withRouter(({ history, match }) => {
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector(
    (state: RootState) => state.specificPost
  );
  useEffect(() => {
    if (match.params.postId) {
      dispatch(loadSpecificPost(match.params.postId));
    } else {
      history.push("/");
    }
  }, [dispatch, history, match.params.postId]);

  const handleClose = () => history.push("/");

  const handleDelete = () => {
    if (post) {
      dispatch(deletePost(post.id));
      handleClose();
    }
  };

  return (
    <style.Modal>
      <style.Container>
        <style.Close onClick={handleClose}>
          <FaTimes />
        </style.Close>
        {isLoading && <Spinner />}
        {!isLoading && post && (
          <React.Fragment>
            <style.Title className="modal-title">{post.title}</style.Title>

            <div className="modal-body">
              <style.Body>{post.body}</style.Body>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
              <style.Comments>
                <h3>Comments</h3>

                <AddComment postId={match.params.postId} />

                {post.comments &&
                  post.comments.length > 0 &&
                  post.comments.map((comment: CommentType) => (
                    <Comment item={comment} key={`comment-${comment.id}`} />
                  ))}
              </style.Comments>
            </div>
          </React.Fragment>
        )}
      </style.Container>
    </style.Modal>
  );
});

export default SpecificPost;
