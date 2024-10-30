import {ITodo} from "../types/todo.ts";
import {useMemo} from "react";


export const useTodos = (todos: ITodo[], query: string) => {
    const searchedTodos = useMemo(() => {
        if(query) {
            return [...todos].filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
        }
        return todos
    }, [query, todos])

    return searchedTodos
}