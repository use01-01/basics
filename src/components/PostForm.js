import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { UseGlobalContext } from '../context';
import MyLabel from './UI/label/MyLabel';

const PostForm = ({ createPost, posts }) => {
  const { input, setInput } = UseGlobalContext();
  const addNewPost = (e) => {
    e.preventDefault();
    if (input.title && input.body) {
      createPost({ ...input, id: posts.length + 1 });
    }
    setInput({ title: '', body: '' });
  };

  return (
    <form action="submit">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2px',
        }}
      >
        <MyLabel inputId="post">Имя</MyLabel>
        <MyInput
          type="text"
          id="post"
          placeholder="название поста"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          style={{ width: '230px' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2px',
        }}
      >
        <MyLabel inputId="postName">Описания</MyLabel>
        <MyInput
          type="text"
          id="postName"
          placeholder="описание поста"
          value={input.body}
          onChange={(e) => setInput({ ...input, body: e.target.value })}
          style={{ width: '230px' }}
        />
      </div>
      <MyButton
        onClick={(e) => addNewPost(e)}
        type="submit"
        style={{ marginTop: '3px' }}
      >
        создать пост
      </MyButton>
    </form>
  );
};

export default PostForm;
