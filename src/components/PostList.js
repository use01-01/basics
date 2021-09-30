import React from 'react';
import { UseGlobalContext } from '../context';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost }) => {
  const {
    setPosts,
    setIdItem,
    editingInput,
    setEditingInput,
    isEditing,
    setIsEditing,
  } = UseGlobalContext();

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>0 постов!</h1>;
  }

  const handleEditFn = (id) => {
    console.log(editingInput);
    setIsEditing(true);
    setIdItem(id);
    let editingElement = posts.find((el) => el.id === id);
    setEditingInput(editingElement.title);
    if (isEditing && editingInput.term) {
      setPosts(
        posts.map((el) =>
          el.id === id && el.id === editingInput.idInput
            ? { ...el, title: editingInput.term }
            : el
        )
      );
      setIsEditing(false);
      setEditingInput('');
    }
  };

  return (
    <div className="posts">
      <h1
        style={{ textAlign: 'center' }}
      >{`найдено ${posts.length} постов`}</h1>
      {posts.map((post, i) => {
        return (
          <PostItem
            post={post}
            key={post.id}
            index={i}
            deletePost={deletePost}
            handleEditFn={handleEditFn}
          />
        );
      })}
    </div>
  );
};

export default PostList;
