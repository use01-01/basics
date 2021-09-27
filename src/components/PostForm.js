import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ createPost, posts }) => {
  const [input, setInput] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    if (input.title && input.body) {
      createPost({ ...input, id: posts.length + 1 });
    }
    setInput({ title: '', body: '' });
  };

  return (
    <form action="submit">
      <MyInput
        type="text"
        placeholder="название поста"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="описание поста"
        value={input.body}
        onChange={(e) => setInput({ ...input, body: e.target.value })}
      />
      <MyButton onClick={(e) => addNewPost(e)} type="submit">
        создать пост
      </MyButton>
    </form>
  );
};

export default PostForm;
