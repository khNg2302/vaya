import { AddTodo } from "./uis/AddTodo";
import { TodoList } from "./uis/TodoList";

export const TodosFeature = () => {
  return (
    <div className="box">
      <h1 className="text-2xl font-semibold">Todo</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
};
