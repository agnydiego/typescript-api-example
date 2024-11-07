import { Post, Comment } from "./types";

export async function fetchPost(postId: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar o post");
  }
  const data: Post = await response.json();
  return data;
}

export async function fetchComments(postId: number): Promise<Comment[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error("Erro ao buscar comentários");
  }
  const data: Comment[] = await response.json();
  return data;
}
