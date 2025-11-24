import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types";
async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
}
export const useTodoList = () => {
    const queryResult = useQuery<Todo[]>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });

    return queryResult
}