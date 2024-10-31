import {ITodo} from "../types/todo.ts";
import {useMemo} from "react";


export const useSortedTodos = (todos: ITodo[], sort: string): Array<ITodo> => {
    return useMemo(() => {
        if(sort) {
            switch (sort) {
                case 'completed':
                    return [...todos].filter(todo => todo.completed);
                case 'incomplete':
                    return [...todos].filter(todo => !todo.completed);
                default:
                    return todos;
            }
        }
        return todos;
    }, [sort, todos])
}

export const useTodos = (todos: ITodo[], sort: string, query: string) => {
    const sortedTodos = useSortedTodos(todos, sort);

    return useMemo(() => {
        if(query) {
            return sortedTodos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
        }
        return sortedTodos
    }, [query, sort, todos])

}