import React, { useState, useMemo } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import { UseGlobalContext } from './context';

const App = () => {
  const { posts, setPosts } = UseGlobalContext();
  const [filter, setFilter] = useState({ sort: '', queryTerm: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(() => {
    if (filter.queryTerm) {
      return sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filter.queryTerm.toLowerCase()) ||
          post.body.toLowerCase().includes(filter.queryTerm.toLowerCase())
      );
    }
    return sortedPosts;
  }, [filter.queryTerm, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    const sorted = posts.filter((post) => post.id !== postId);
    setPosts(sorted);
  };

  return (
    <div className="app">
      <PostForm createPost={createPost} posts={posts} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPost} deletePost={deletePost} />
    </div>
  );
};

export default App;
