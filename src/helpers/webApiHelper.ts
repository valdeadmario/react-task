import { async } from "q";

const SERVER_URL = "http://bloggy-api.herokuapp.com/";

export const getPosts = async () => {
  const response = await fetch(SERVER_URL + "posts");

  return response.json();
};

export const getPost = async (postId: string) => {
  const response = await fetch(SERVER_URL + `posts/${postId}?_embed=comments`);

  return response.json();
};

export const createPost = async (title: string, body: string) => {
  const response = await fetch(SERVER_URL + `posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })
  });

  return response.json();
};

export const deletePost = async (postId: string) => {
  const response = await fetch(SERVER_URL + `posts/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });

  return response.json();
};

export const updatePost = async (postId: string,  title: string, body: string) => {
  const response = await fetch(SERVER_URL + `posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ title, body })
  });

  return response.json();
};

export const createComment = async (postId: number, body: string) => {
  const response = await fetch(SERVER_URL + `comments`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ postId, body })
  });

  return response.json();
};
