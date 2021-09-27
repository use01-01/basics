import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post, index, deletePost }) => {
  const { title, body, id } = post;
  return (
    <div className="post">
      <h1>{`${index + 1}. ${title}`}</h1>
      <p>{body}</p>
      <MyButton onClick={() => deletePost(id)}>удалить</MyButton>
    </div>
  );
};

export default PostItem;
