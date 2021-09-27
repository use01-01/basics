import React, { useState } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'text01' },
    { id: 2, title: 'JavaScript', body: 'text01' },
    { id: 3, title: 'JavaScript', body: 'text01' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    const sorted = posts.filter((post) => post.id !== postId);
    setPosts(sorted);
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="app">
      <PostForm createPost={createPost} posts={posts} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          sortPost={sortPost}
          defaultValue="сортировка"
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>

      {posts.length > 0 ? (
        <PostList posts={posts} deletePost={deletePost} />
      ) : (
        <h2 style={{ textAlign: 'center' }}>0 постов</h2>
      )}
    </div>
  );
};

export default App;
