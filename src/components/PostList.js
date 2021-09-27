import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="posts">
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
