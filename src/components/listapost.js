import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/fetchPosts';
import Post from './post';
import '../styles/listapost.css';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='listapost-page'>
        <div className="post-list-container">
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
        </div>
    </div>
  );
};

export default PostList;
