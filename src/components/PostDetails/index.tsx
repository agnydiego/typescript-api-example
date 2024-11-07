import React, { useEffect, useState } from "react";
import { fetchPost, fetchComments } from "../../services";
import { Post, Comment } from "../../services/types";
import './styles.css';

const PostDetails: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPostAndComments = async () => {
      try {
        const postId = 1;
        const post = await fetchPost(postId);
        const comments = await fetchComments(postId);
        setPost(post);
        setComments(comments);
      } catch (err) {
        setError("Ocorreu um erro ao carregar os dados");
      }
    };

    loadPostAndComments();
  }, []);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="post-details">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <div className="comments">
            <h3>Comentários:</h3>
            <ul>
                {comments.map((comment) => (
                <li key={comment.id}>
                    <strong>{comment.name} ({comment.email}):</strong> <p>{comment.body}</p>
                </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="loading-message">Carregando post...</p>
      )}
    </div>
  );
};

export default PostDetails;
