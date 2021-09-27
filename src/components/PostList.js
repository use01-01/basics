import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>0 постов!</h1>;
  }
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
          />
        );
      })}
    </div>
  );
};

export default PostList;
