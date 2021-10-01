import React, { useState } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import { UseGlobalContext } from './context';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

const App = () => {
  const { posts, setPosts } = UseGlobalContext();
  const [filter, setFilter] = useState({ sort: '', queryTerm: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.queryTerm);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (postId) => {
    const sorted = posts.filter((post) => post.id !== postId);
    setPosts(sorted);
  };

  return (
    <div className="app">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        создать запись
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} posts={posts} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPost} deletePost={deletePost} />
    </div>
  );
};

export default App;
