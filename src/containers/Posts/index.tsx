import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { FaTimes } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";

import Post from "../../components/Post";
import AddPost from "../../components/AddPost";
import SpecificPost from "../../containers/SpecificPost";

import * as style from "./style";
import * as modalStyle from "../SpecificPost/style";
import { loadPosts, deletePost } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.items);
  const [editingPost, setEditingPost] = useState({});

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const onClose = () => setEditingPost({});

  return (
    <style.PostContainer>
      <AddPost />

      {posts.map((post: any) => (
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
            <modalStyle.Close onClick={onClose}>
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
