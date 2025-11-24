import { TodoDetail } from "@/features/todos/uis/TodoDetail";

const TodoDetailPage = async (props: PageProps<"/todos/[id]">) => {
  const { id } = await props.params;
  return <TodoDetail id={id} />;
};

export default TodoDetailPage;
