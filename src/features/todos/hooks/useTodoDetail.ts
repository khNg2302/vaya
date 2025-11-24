import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types";

async function fetchTodoDetail(id: string | number | null) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
}
export const useTodoDetail = (id: string) => {

    const queryResult = useQuery<Todo[]>({
        queryKey: ["todos", id],
        queryFn: () => fetchTodoDetail(id),
    });

    return queryResult
}