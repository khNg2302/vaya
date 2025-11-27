import { SplitSide } from "@/components/layout/splitSide";
import { BlogTitleLeftSide } from "./_components/TitleLeftSide";
import { Posts } from "@/features/posts/ui/posts";

const BlogPage = () => {
  return (
    <SplitSide>
      <SplitSide.Side className="">
        <BlogTitleLeftSide />
      </SplitSide.Side>
      <SplitSide.Side>
        <Posts />
      </SplitSide.Side>
      <SplitSide.Side></SplitSide.Side>
    </SplitSide>
  );
};

export default BlogPage;
