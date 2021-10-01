import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState({ title: '', body: '' });
  const [posts, setPosts] = useState([]);
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
