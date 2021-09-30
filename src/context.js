import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState({ title: '', body: '' });
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'text01' },
    { id: 2, title: 'python', body: 'text02' },
    { id: 3, title: 'C#', body: 'text03' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingInput, setEditingInput] = useState({ term: '', idInput: '' });
  const [idItem, setIdItem] = useState('');
  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        posts,
        setPosts,
        editingInput,
        idItem,
        setIdItem,
        setEditingInput,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
