import { SplitSide } from "@/components/layout/splitSide";
import { Post } from "@/features/posts/ui/post";

const PostPage = async (props: PageProps<"/blog/post/[id]">) => {
  const { id } = await props.params;
  return (
    <SplitSide>
      <SplitSide.Side></SplitSide.Side>
      <SplitSide.Side>
        <Post id={id} />
      </SplitSide.Side>
      <SplitSide.Side></SplitSide.Side>
    </SplitSide>
  );
};

export default PostPage;
