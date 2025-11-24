"use client";
import { useTodoList } from "../hooks/useTodoList";

export const TodoList = () => {
  const { isLoading, error, data } = useTodoList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ul>
        {data?.slice(0, 5).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};
