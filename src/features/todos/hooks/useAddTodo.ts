
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types";

async function addTodo(newTodo: Todo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

export const useAddTodo = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        },
    });

    const handleAdd = () => {
        mutation.mutate({ title: 'New Todo', completed: false });
    };

    return { handleAdd, mutation }
}