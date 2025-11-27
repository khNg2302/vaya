"use client";
import { useDeletePost } from "../../hooks/useDeletePost";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../types";

export const Posts = () => {
  const { data } = usePosts();
  return (
    <div>
      {data.items.map((item) => {
        return <PostItem key={item.id} {...item} />;
      })}
    </div>
  );
};

const PostItem = (post: Post) => {
  const { handleDelete } = useDeletePost({ id: post.id });
  return <div>hihi</div>;
};
