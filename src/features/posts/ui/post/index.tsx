import { usePost } from "../../hooks/usePost";
import { Post as PostType } from "../../types";

export const Post = ({ id }: { id: string }) => {
  const { data } = usePost({ id });
  return <PostItem {...data} />;
};

export const PostItem = ({ title, content }: PostType) => {
  return (
    <>
      <div></div>
      <div className="full-section">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
};
