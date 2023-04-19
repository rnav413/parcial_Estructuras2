import React from 'react';
import '../styles/post.css';

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p>id: {post.id}, Album id: {post.albumId}</p>
      <img src={post.url}/>
    </div>
  );
};

export default Post;
