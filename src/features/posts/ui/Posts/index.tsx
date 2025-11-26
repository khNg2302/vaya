import { usePosts } from "../../hooks/usePosts";

export const Posts = () => {
  const { data } = usePosts();
  return <div>{data.map((item) => {})}</div>;
};
