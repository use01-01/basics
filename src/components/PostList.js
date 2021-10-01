import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    setIsEditing(true);
    setIdItem(id);
    let editingElement = posts.find((el) => el.id === id);
    setEditingInput({ ...editingInput, term: editingElement.title });
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
      <TransitionGroup>
        {posts.map((post, i) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem
                post={post}
                index={i}
                deletePost={deletePost}
                handleEditFn={handleEditFn}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
