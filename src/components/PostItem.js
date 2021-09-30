import React from 'react';
import { UseGlobalContext } from '../context';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostItem = ({ post, index, deletePost, handleEditFn }) => {
  const { title, body, id } = post;
  const { editingInput, setEditingInput, isEditing, idItem } =
    UseGlobalContext();

  return (
    <div className="post">
      <h1>{`${index + 1}. ${title}`}</h1>
      {id === idItem && isEditing && (
        <MyInput
          type="text"
          value={editingInput.term}
          onChange={(e) =>
            setEditingInput({ term: e.target.value, idInput: id })
          }
        />
      )}
      <p>{body}</p>
      <MyButton onClick={() => deletePost(id)}>удалить</MyButton>
      <MyButton onClick={() => handleEditFn(id)}>
        {isEditing && id === idItem ? 'сохранить изменение' : 'редактировать'}
      </MyButton>
    </div>
  );
};

export default PostItem;
