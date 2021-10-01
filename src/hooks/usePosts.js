import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, queryTerm) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(queryTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(queryTerm.toLowerCase())
    );
  }, [queryTerm, sortedPosts]);

  return sortedAndSearchedPost;
};
