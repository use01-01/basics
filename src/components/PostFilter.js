import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, queryTerm: e.target.value })}
        placeholder="поиск..."
      />
      <MySelect
        value={filter.sort}
        sortPost={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="сортировка"
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
