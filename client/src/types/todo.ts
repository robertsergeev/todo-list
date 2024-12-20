export interface ITodo {
    id: number;
    title: string;
    completed: boolean,
}

export interface TodoState {
    todos: ITodo[];
    currentTodo: ITodo | null;
    page: number;
    limit: number;
    totalTodos: number;
    isLoading: boolean;
    error: null | string;
}

export interface fetchAllTodosPayload {
    todos: ITodo[],
    totalTodos: number,
}