"use client";

import { useAddTodo } from "../hooks/useAddTodo";

export const AddTodo = () => {
  const { handleAdd, mutation } = useAddTodo();
  return (
    <div>
      <button onClick={handleAdd} disabled={mutation.isPending}>
        Add Todo
      </button>
      {mutation.isError && <p>Error adding todo</p>}
      {mutation.isPending && <p>Adding todo...</p>}
      {mutation.isSuccess && <p>Todo added!</p>}
    </div>
  );
};
