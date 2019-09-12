import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Post from "../../components/Post";
import AddPost from "../../components/AddPost";
import Spinner from "../../components/Spinner";
import SpecificPost from "../SpecificPost";

import * as style from "./style";
import * as modalStyle from "../SpecificPost/style";
import { loadPosts } from "./actions";
import { PostType } from "../../types/post.types";
import { RootState } from "../../store/types";

const Posts = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state: RootState) => state.posts);
  const [editingPost, setEditingPost] = useState({});

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const handleClose = () => setEditingPost({});

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <style.PostContainer>
      <AddPost />

      {items.map((post: PostType) => (
        <Post
          data={post}
          key={`post-${post.id}`}
          setEditingPost={setEditingPost}
        />
      ))}

      <Route exact path="/:postId" component={SpecificPost} />
      {Object.entries(editingPost).length !== 0 && (
        <modalStyle.Modal>
          <modalStyle.Container>
            <modalStyle.Close onClick={handleClose}>
              <FaTimes />
            </modalStyle.Close>
            <AddPost
              editingPost={editingPost}
              setEditingPost={setEditingPost}
            />
          </modalStyle.Container>
        </modalStyle.Modal>
      )}
    </style.PostContainer>
  );
};

export default Posts;
